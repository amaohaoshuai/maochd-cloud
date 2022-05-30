#### Linux系统配置(所有机器)

~~~
1、查看防火墙
[CMD]: firewall-cmd --state
[当前目录]: /root

2、关闭防火墙
[CMD]: systemctl stop firewalld.service
[CMD]: systemctl disable firewalld.service
[当前目录]: /root

3、配置host文件
[CMD]: vim /etc/hosts
[添加内容]: 
    192.168.98.130 k3s-master
    192.168.98.131 k3s-node1
    192.168.98.132 k3s-node2
    192.168.98.133 hub.maochd.com
[CMD]: /ect/init.d/network restart
[当前目录]: /root
~~~

#### harbor搭建

~~~
1、安装并启动docker
[当前机器IP]: 192.168.98.133
[CMD]: curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
[CMD]: systemctl start docker
[当前目录]: /root

2、安装docker-compose
[当前机器IP]: 192.168.98.133
[CMD]: curl -L "https://github.com/docker/compose/releases/download/v2.5.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
[当前目录]: /root

3、给docker-compose赋权限
[当前机器IP]: 192.168.98.133
[CMD]: chmod +x /usr/local/bin/docker-compose
[当前目录]: /root

4 、创建软链
[当前机器IP]: 192.168.98.133
[CMD]: ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
[当前目录]: /root

5、安装wget
[当前机器IP]: 192.168.98.133
[CMD]: yum install wget
[当前目录]: /root

6、下载harbor离线安装包
[当前机器IP]: 192.168.98.133
[CMD]: mkdir /harbor
[CMD]: cd /harbor
[CMD]: wget https://github.com/vmware/harbor/releases/download/v1.10.11/harbor-online-installer-v1.10.11.tgz
[当前目录]: /harbor

7、解压harbor
[当前机器IP]: 192.168.98.133
[CMD]: tar -zxvf harbor-online-installer-v1.10.11.tgz
[当前目录]: /harbor

8、生成证书
[当前机器IP]: 192.168.98.133
[CMD]: mkdir -p /data/cert && chmod -R 777 /data/cert && cd /data/cert
[CMD]: openssl req -x509 -sha256 -nodes -days 3650 -newkey rsa:2048 -keyout harbor.key -out harbor.crt -subj "/CN=hub.maochd.com"
[当前目录]: /data/cert

9、编辑harbor.yml、docker-compose.yml文件
[当前机器IP]: 192.168.98.133
[CMD]: cd /harbor/harbor
[CMD]: vim harbor.yml
[当前目录]: /harbor/harbor
[说明]: 文件内容放到middleware下面，对应比对即可,端口如果是独立服务器可以不修改，如果和k3s部署在同一台机器上，则需修改，k3s会占用443端口

10、运行harbor
[当前机器IP]: 192.168.98.133
[CMD]: ./prepare
[CMD]: ./install.sh
[当前目录]: /harbor/harbor

11、访问harbor并新建项目maochdcloud
[url]: https://192.168.98.133/harbor/sign-in?redirect_url=%2Fharbor%2Fprojects
[account]: admin
[password]: 123456

12、docker增加daemon.json
[CMD]: vim /etc/docker/daemon.json
[当前路径]: /harbor/harbor
[说明]: 文件放在middleware文件夹下，直接放到/etc/docker目录下即可

13、重启docker
[CMD]: systemctl restart docker
[CMD]: docker ps
[当前路径]: /harbor/harbor
[说明]: 如果harbor的服务没有重启，需要手动重启

14、制作镜像
[CMD]: cd /root
[CMD]: docker build -t test-vue:1.0.0 .
[当前路径]: /root

15、配置hosts
[CMD]: vim /etc/hosts
[CMD]: /etc/init.d/network restart
[当前机器IP]: 192.168.98.130
[当前路径]: /root
[说明]: 在192.168.98.130的IP后面补充hub.maochd.com

16、docker登录harbor
[CMD]: docker login hub.maochd.com
[当前路径]: /root

17、把镜像打成tag
[CMD]: docker tag test-vue:1.0.0 hub.maochd.com:444/maochdcloud/test-vue
[当前路径]: /root

18、把镜像推送到harbor
[CMD]: docker push hub.maochd.com/maochdcloud/test-vue
~~~



#### K3S搭建

~~~
1、安装master
[当前机器IP]: 192.168.98.130
[CMD]: curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -
[当前目录]: /root

2、获取token
[当前机器IP]: 192.168.98.130
[CMD]: cat /var/lib/rancher/k3s/server/node-token
[当前目录]: /root

3、安装node1
[当前机器IP]: 192.168.98.131
[CMD]: curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://k3s-master:6443 K3S_TOKEN=K10ce1b15419a41eae985edf102e8f7872379e34c0eff40959622a42c6d54c7815a::server:98891e8c43f818b53bbc583debaac9cd K3S_NODE_NAME=k3s-node1 sh -
[当前目录]: /root

4、安装node2
[当前机器IP]: 192.168.98.132
[CMD]: curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://k3s-master:6443 K3S_TOKEN=K10ce1b15419a41eae985edf102e8f7872379e34c0eff40959622a42c6d54c7815a::server:98891e8c43f818b53bbc583debaac9cd K3S_NODE_NAME=k3s-node2 sh -
[当前目录]: /root

5、查看结果
[当前机器IP]: 192.168.98.130
[CMD]: kubectl get nodes
[当前目录]: /root
~~~

#### k3s配置harbor

~~~
1、添加registries.yaml文件
[当前机器IP]: 192.168.98.130
[CMD]: vim /etc/rancher/k3s/registries.yaml
[CMD]: systemctl restart k3s
[当前路径]: /root
[说明]: 文件放在middleware文件夹下面，直接添加即可

2、重启所有节点
[当前机器IP]: 192.168.98.131 | 192.168.98.132
[CMD]: sytemctl restart k3s-agent
[当前路径]: /root

2、创建namespace
[当前机器IP]: 192.168.98.130
[CMD]: kubectl create namespace maochd-cloud
[当前路径]: /root

3、生成可执行的yaml文件
[当前机器IP]: 192.168.98.130
[CMD]: kubectl create deployment test-vue --image=hub.maochd.com:444/maochdcloud/test-vue --port=7000 -n maochd-cloud -o yaml --dry-run > test-vue.yaml
[当前路径]: /root

4、执行yaml文件
[当前机器IP]: 192.168.98.130
[CMD]: kubectl apply -f test-vue.yaml
[当前路径]: /root

5、查看pods
[当前机器IP]: 192.168.98.130
[CMD]: kubectl get pods -n maochd-cloud
[当前路径]: /root
~~~


