# centos中部署egg

由于服务端项目跟前端项目不同 不需要进行打包

所以直接在文件夹下git clone 然后git i 这样比在winscp里面拖更方便

## mongodb

部署egg的时候碰到了mongodb的一些坑

意外退出mongodb的时候 文件夹下会生成lock文件 如果不删除这些文件的话 就会导致无法启动mongo

## egg

### eggconfig.keys

    nodejs.Error: Please set config.keys first

前端请求时会收到这个报错 原因是

egg.js的文档上有句话：

> 正式环境下，我们更倾向于把ts构建为js。

所以在启动前还需要进行编译操作

    npm run ci

## pm2

在egg根目录下编写server文件

```js
const egg = require('egg');

const workers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
  workers,
  baseDir: __dirname,
});

//startCluster是egg的内置方法
```

然后利用pm2启动并命名

    pm2 start server.js --name blog

    pm2 save


## nginx代理

在开发环境中 使用的是vue的proxy进行代理到服务端口

到了生产环境 就需要nginx进行代理

```
server {
    listen       80;
    server_name www.qzr.com;

    # 代理api请求
    location /api/ {
        proxy_pass http://127.0.0.1:7001;
    }
}
```
