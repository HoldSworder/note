# 批量处理

## 停止多个容器

docker container stop $(docker container ps -aq)

## 删除多个容器

docker container rm $(docker container ps -aq)

## 批量删除不再使用的容器 已经退出的容器

docker system prune -f

## 删除没有使用的所有镜像

docker image prune -a
