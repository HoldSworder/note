# 生成 ssh 密钥对

1. 在任意本地仓库中打开
   git bash here

2. 输入
   cd ~/.ssh

3. 输入
   ssh-keygen -t rsa -C "your email"

4. 回车三次 生成三个文件
   id_rsa 文件即是你的私有密钥，id_rsa.pub 是共开密钥

5. 根据路径找到文件
   复制 id_rsa.pub 中的内容

6. 在 github>setting>SSH and GPG keys 中
   生成新的密钥

7. ssh -T git@github.com

```js
// 如果报错ssh: connect to host ssh.github.com port 22: Connection timed out

// 在./ssh 下找到congfig文件，如果没有就创建一个

//输入以下代码
Host github.com

User git

Hostname ssh.github.com

PreferredAuthentications publickey

IdentityFile ~/.ssh/id_rsa

Port 443
```
