# 部署ssl证书 升级https

## 购买
在阿里云可以为个人用户免费申请一年的ssl证书，但是只能绑定一个域名
[购买地址](https://common-buy.aliyun.com/?spm=5176.2020520163.cas.1.6682S48JS48JnT&commodityCode=cas#/buy)


## 下载
购买成功后进行申请，如果是在阿里云购买的，半个小时内就能完成

申请完成后就可以点击下载

会下载下来一个压缩文件
`.key`和
`.pem`文件
把他俩解压到服务器中

## 配置
在nginx.conf或者conf.d/.conf文件中配置

```conf
server {
    listen 443 ssl;   #SSL协议访问端口号为443。此处如未添加ssl，可能会造成Nginx无法启动。
    server_name xx.com;  #将localhost修改为您证书绑定的域名，例如：www.example.com。
    root html;
    index index.html index.htm;
    ssl_certificate /etc/.../.pem;   #将domain name.pem替换成您证书的文件名。
    ssl_certificate_key /etc/.../.key;   #将domain name.key替换成您证书的密钥文件名。
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #使用此加密套件。
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #使用该协议进行配置。
    ssl_prefer_server_ciphers on;  

    # 匹配callback
    location /callback/ {
        proxy_pass http://127.0.0.1:7001;
    }

    autoindex on;

    location / {
        root   /srv/www/my-page;
        try_files $uri $uri/ /index.html;
    
        index  index.html;

    }

    location /api/ {
        proxy_pass http://127.0.0.1:7001;
    }
} 

server
{
  # 80端口是http正常访问的接口
  listen 80;
  server_name xx.com;
  # 在这里，我做了https全加密处理，在访问http的时候自动跳转到https
  rewrite ^(.*) https://$host$1 permanent;
}

```

## 注意

不要忘记开放443端口
