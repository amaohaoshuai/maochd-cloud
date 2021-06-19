## 查看防火墙
firewall-cmd --state
## 关闭防火墙
systemctl stop firewalld.service
systemctl disable firewalld.service

## 安装git
yum install -y git

## 安装docker
curl -fsSL https://get.docker.com | bash -s docker --mirror aliyun

## 运行docker
systemctl start docker

## 安装mysql
docker run --name maochd-mysql -v /opt/mysql5.7/conf:/etc/mysql/conf.d -v /opt/mysql5.7/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7.32

## 安装nacos server
docker run --name maochd-nacos -e MODE=standalone -p 8848:8848 -d nacos/nacos-server:1.4.1

## 安装sentinel dashboard
docker run --name maochd-sentinel  -d -p 8858:8858 -d  bladex/sentinel-dashboard

