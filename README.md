## 查看防火墙
firewall-cmd --state

## 关闭防火墙
systemctl stop firewalld.service\
systemctl disable firewalld.service

## 安装docker
curl -fsSL https://get.docker.com | bash -s docker --mirror aliyun

## 运行docker
systemctl start docker

## 安装mysql(推荐使用5.7)
docker run --name maochd-mysql -v /opt/mysql5.7/conf:/etc/mysql/conf.d -v /opt/mysql5.7/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7.32
docker run --name maochd-mysql -v /opt/mysql8/conf:/etc/mysql/conf.d -v /opt/mysql8/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0.25

## 安装nacos server
docker run --name maochd-nacos -e MODE=standalone -p 8848:8848 -d nacos/nacos-server:1.4.1

## 安装sentinel dashboard
docker run --name maochd-sentinel  -d -p 8858:8858 -d  bladex/sentinel-dashboard

## 安装git
yum install -y git

## 下载seata源码
git clone https://gitee.com/seata-io/seata.git -b v1.4.2

## 替换config.txt
## 执行nacos脚本
sh nacos-config.sh -h 10.10.3.81 -p 8848 -g SEATA_GROUP -t maochd-cloud-seata -u nacos -w nacos

## 安装seata server
docker run -d --name maochd-seata -p 8091:8091 -e STORE_MODE=db -e SEATA_IP=10.10.3.81 -e SEATA_PORT=8091 -e SEATA_CONFIG_NAME=file:/root/seata-config/registry -v /opt/seata-config:/root/seata-config seataio/seata-server:1.4.2

## 安装redis
docker run -p 6379:6379 --name maochd-redis -v /opt/redis6/conf:/etc/redis/redis.conf -v /opt/redis6/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes

## 安装zipkin
docker run -d --name maochd-zipkin -p 9411:9411 -e STORAGE_TYPE=mysql -e MYSQL_DB=zipkin -e MYSQL_USER=root -e MYSQL_PASS=root -e MYSQL_HOST=10.10.3.81 -e MYSQL_TCP_PORT=3306 openzipkin/zipkin:2.23.4
