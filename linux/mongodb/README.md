# CentOs下的mongodb

## 安装

使用yum进行安装
```
whereis mongod
```
查看位置

## 启动

```
➜  ~ systemctl start mongod
➜  ~ systemctl status mongod
➜  ~ systemctl stop mongod
```

## 进入

```
➜  ~ mongo
```

## 配置文件
/etc/mongod.conf

## 日志文件
/var/log/mongo/mongod.log

## robo3T远程连接

## 记一次报错

日志文件报错

Failed to unlink socket file /tmp/mongodb-32018.sock errno:1 Operation not permitted

sock文件没有权限，解决方案是删除掉sock文件

