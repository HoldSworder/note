# 常用命令

## 启动

    systemctl status docker.service

## 启动容器

    docker start [ID]

## 容器自启

    docker update --restart=always [ID]

## 进入容器

docker exec -it -u root ID bash

exit 退出容器

## 容器重启

docker restart

## 1. 查看

* 查看镜像: docker images
* 查看运行容器: docker ps
* 查看所有容器: docker container ls -a
* 查看所有容器：docker ps -a

## 2. 停止

* 停止容器: docker stop NAME
* 删除一个已停止的容器: docker rm NAME
* 删除一个运行中的容器: docker rm -f NAME

## 删除镜像

* docker rmi NAME
* 强制删除(针对基于镜像有运行的容器进程): docker rmi -f NAME
