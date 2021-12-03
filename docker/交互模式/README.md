# 交互模式

## 进入交互模式

直接进入交互模式 exit退出时 容器也会退出

docker container run -it ubuntu sh

## 进入交互模式 后台

先后台启动

docker container run -d -p 80:80 nginx

再用exec命令进入交互

docker exec -it 3d81 sh
