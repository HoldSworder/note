1.找到目标文件夹
cd /usr/local/src

2.使用淘宝镜像安装
wget https://npm.taobao.org/mirrors/node/v8.2.1/node-v8.2.1-linux-x64.tar.gz

3.解压
tar -zxvf node-v6.9.4-linux-x64.tar.gz

4.重命名
mv node-v6.9.4-linux-x64 node

5.配置环境
在 /etc/profile 末尾加上

export NODE_HOME=/usr/src/node-v8.2.1      //node安装路径
export PATH=$PATH:$NODE_HOME/bin
export NODE_PATH=$NODE_HOME/lib/node_modules