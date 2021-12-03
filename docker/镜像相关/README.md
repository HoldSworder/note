# 镜像相关

## 查看镜像列表

docker image ls

## 拉取镜像

docker image pull xxx

## 查看镜像详情

docker image inspect ID

## 删除镜像

docker image rm ID

## 导出镜像

docer image save xxx:latest -o xxxxx.image

## 导入镜像

docer image load -i ./../xxx.image

## 构建镜像

docker image build -t xxx ./

指定dockerfile文件

docker image build -f Dockerfile.xxx -t xxx ./

## 重命名镜像

docker image tag xxx1 xxx2

## 上传镜像到hub

docker image push hubname/xxx
