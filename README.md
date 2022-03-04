## 墨鱼~圈微服务 [maochd-cloud]
### 简介
~~~
提供了一套拆箱即用的微服务框架，包含注册中心、配置中心、统一入口（网关）、认证中心、服务监控、服务链路追踪、分布式事务、
分布式任务、分布式定时任务、消息队列的功能，极大简化项目前期的构建。
~~~

### 系统模块
~~~
com.maochd.cloud     
├── maochd-gateway                           // 网关服务 [18080]
├── maochd-auth                              // 认证中心 [19000]
├── maochd-job                               // 定时任务服务 [19004]
├── maochd-monitor                           // 监控服务 [18083]
├── maochd-mq                                // 消息队列服务 [19005]
├── maochd-websocket                         // 消息队列服务 [19008]
├── middleware                               // 配置文件
        └── application                      // Nacos配置中心文件
        └── loki                             // 日志配置
        └── seata                            // Seata配置
        └── sentinel                         // 限流配置
        └── sql                              // 数据库文件 
        └── html                             // HTML文件 
├── maochd-api                               // API调用模块
├── maochd-common                            // 公共组件模块
│       └── maochd-common-core               // 公共核心模块
│       └── maochd-common-datasource         // 数据源模块
│       └── maochd-common-feign              // 远程调用模块
│       └── maochd-common-log                // 日志模块
│       └── maochd-common-redis              // Redis缓存模块
│       └── maochd-common-swagger            // API文档模块
├── maochd-service                           // 业务模块
│       └── maochd-goods                     // 商品服务 [19003]
│       └── maochd-order                     // 订单服务 [19001]
│       └── maochd-account                   // 账户服务 [19002]
│       └── maochd-third-party               // 第三方服务 [19006]
│       └── maochd-email                     // 邮件服务 [19007]
│       └── maochd-user                      // 用户服务 [19009]
~~~

### 架构图
![输入图片说明](maochd-cloud%E6%9E%B6%E6%9E%84%E5%9B%BE.jpg)

### 使用主要组件
~~~
SpringCloud         [微服务]
SpringCloud Alibaba [阿里巴巴微服务]
SpringBoot          [SpringBoot]
Nacos               [注册中心 + 配置中心]
Sentinel            [流量卫兵（限流 + 服务降级）]
Feign               [远程接口调用]
Seate               [分布式事务]
Redisson            [分布式锁]
Zikpin              [服务链路追踪]
Sleuth              [服务链路追踪]
Xxl-Job             [分布式定时任务]
Kafka               [消息队列]
OAuth2              [认证框架]
~~~

### 组件部署步骤（默认Linux系统，并在root目录下）
#### Linux系统配置
~~~
1、查看防火墙
[CMD]: firewall-cmd --state
[当前目录]: /root

2、关闭防火墙
[CMD]: systemctl stop firewalld.service
[CMD]: systemctl disable firewalld.service
[当前目录]: /root
~~~

#### 安装Git
~~~
[CMD]: yum install -y git
[当前目录]: /root
~~~

#### 安装、运行Docker
~~~
1、安装Docker
[CMD]: curl -fsSL https://get.docker.com | bash -s docker --mirror aliyun
[当前目录]: /root

2、运行Docker
[CMD]: systemctl start docker
[当前目录]: /root
~~~

#### 安装Mysql（推荐使用5.7）
~~~
安装Mysql5.7
[CMD]: docker run --name maochd-mysql -v /opt/mysql5.7/conf:/etc/mysql/conf.d -v /opt/mysql5.7/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7.32
安装Mysql8
[CMD]: docker run --name maochd-mysql -v /opt/mysql8/conf:/etc/mysql/conf.d -v /opt/mysql8/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0.25
[当前目录]: /root
~~~

#### 安装Redis
~~~
[CMD]: docker run -p 6379:6379 --name maochd-redis -v /opt/redis6/conf:/etc/redis/redis.conf -v /opt/redis6/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes
[当前目录]: /root
~~~

#### 安装Nacos Server
~~~
[CMD]: docker run --name maochd-nacos -e MODE=standalone -p 8848:8848 -d nacos/nacos-server:1.4.1
[当前目录]: /root
~~~

#### 安装Sentinel Dashboard
~~~
[CMD]: docker run --name maochd-sentinel  -d -p 8858:8858 -d  bladex/sentinel-dashboard
[当前目录]: /root
~~~

#### 安装Seata
~~~
1、下载seata源码
[CMD]: git clone https://gitee.com/seata-io/seata.git -b v1.4.2
[当前目录]: /root

2、替换config.txt文件
[CMD]: cd /root/seata/script/config-center
[说明]: 需要把middleware中的config.txt替换到当前目录下，可以使用shell文件管理工具,我这里用的mobaxterm
[当前目录]: /root/seata/script/config-center

3、把配置文件推送到nacos配置中心
[CMD]: cd /root/seata/script/config-center/nacos
[CMD]: sh nacos-config.sh -h 10.10.3.81 -p 8848 -g SEATA_GROUP -t maochd-cloud-seata -u nacos -w nacos
[当前目录]: /root/seata/script/config-center/nacos

4、安装seata server
[CMD]: docker run -d --name maochd-seata -p 8091:8091 -e STORE_MODE=db -e SEATA_IP=10.10.3.81 -e SEATA_PORT=8091 -e SEATA_CONFIG_NAME=file:/root/seata-config/registry -v /opt/seata-config:/root/seata-config seataio/seata-server:1.4.2
[CMD]: cd
[当前目录]: /root
~~~

#### 安装Zipkin
~~~
[CMD]: docker run -d --name maochd-zipkin -p 9411:9411 -e STORAGE_TYPE=mysql -e MYSQL_DB=zipkin -e MYSQL_USER=root -e MYSQL_PASS=root -e MYSQL_HOST=10.10.3.81 -e MYSQL_TCP_PORT=3306 openzipkin/zipkin:2.23.4
[当前目录]: /root
~~~

#### 安装Xxl-job-admin
~~~
[CMD]: docker  run -d  --name maochd-xxl-job -p 9000:8080 \
-v /opt/job/logs:/data/applogs \
-e PARAMS="--spring.datasource.url=jdbc:mysql://10.10.3.81:3306/xxl_job?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8 --spring.datasource.username=root --spring.datasource.password=root --spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver"  xuxueli/xxl-job-admin:2.3.0
[当前目录]: /root
~~~

#### 安装zookeeper、kafka
~~~
1、 安装zookeeper
[CMD]: docker run -d --name zookeeper -p 2181:2181 --restart=always -v /home/data/zookeeper_data/data:/data -v /home/data/zookeeper_data/conf:/conf wurstmeister/zookeeper
[当前目录]: /root

2、安装kafka
[CMD]: docker run --name kafka \
-p 9092:9092 \
-e KAFKA_BROKER_ID=0 \
-e KAFKA_ZOOKEEPER_CONNECT=10.10.3.81:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://10.10.3.81:9092 \
-e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 \
-d  wurstmeister/kafka
[当前目录]: /root
~~~

#### 安装loki日志（当前未对服务制作镜像，可先不安装）
~~~
1、安装loki-docker插件
[CMD]: docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
[当前目录]: /root

2、安装loki
[CMD]: docker run -d  -u root \
-p 3100:3100 --name loki  \
-v /opt/loki/conf:/mnt/config \
-v /opt/loki/tmp:/tmp/loki \
grafana/loki:2.0.0 -config.file=/mnt/config/loki-config.yaml
[说明]: 需要把middleware中的loki文件放到/opt.loki/conf下面，路径可以自定义，只要能和容器内部地址挂载就行
[当前目录]: /root

3、安装grafana
[CMD]: docker run -d -u root \
-p 3000:3000 --name maochd-grafana  \
-v /opt/grafana:/var/lib/grafana \
grafana/grafana:8.1.2
[当前目录]: /root
~~~