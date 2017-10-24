// 启用一个最简单的server

const http = require('http');
const url = require('url');
const util = require('util');

let server = http.createServer((req,res) => {
    res.statusCode = 200; //设置状态码200
    res.setHeader('content-Type','text/plain; charset = utf-8');  //设置消息头
    res.end(util.inspect(url.parse(req.url))) //页面输出字符串形式的url

});

server.listen(3000)  //监听3000端口

console.log('打印提示') //在终端显示