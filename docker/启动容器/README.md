# 启动容器

## 前台启动

能看到日志 但是退出命令行 容器也随之退出

docker container run nginx

## 映射启动

映射90端口到容器的80端口

docker container run -p 90:80 nginx

## 后台启动

docker container run -d -p 90:80 nginx

## 后台转前台

docker attach ID
