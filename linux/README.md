# 基本命令

## 切换root

ru root

## systemctl

```bash
systemctl enable docker  #开机自启docker
systemctl start docker # 启动docker
systemctl restart docker # 重启dokcer
```

## 查看文件

cat ***

## 删除

rm -rf DIRPATH

## 打包命令

tar -zcvf dist.tar.gz

tar -xvf dist.tar.gz

## 获取pid

pgrep -f name
