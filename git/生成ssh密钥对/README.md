在任意本地仓库中打开 
git bash here

输入
cd ~/.ssh

输入
ssh-keygen -t rsa -C "your email"

回车三次 生成三个文件
id_rsa文件即是你的私有密钥，id_rsa.pub是共开密钥

根据路径找到文件 
复制id_rsa.pub中的内容

在github>setting>SSH and GPG keys中
生成新的密钥