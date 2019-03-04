const http = require('http');
const url = require('url');
const util = require('util');
const fs = require('fs');

let server = http.createServer((req,res) => {
    // res.statusCode = 200; //设置状态码200
    // res.setHeader('content-Type','text/plain; charset = utf-8');  //设置消息头

    let pathname = url.parse(req.url).pathname;

    console.log('file:' + pathname.substring(1))
    
    fs.readFile(pathname.substring(1), (err,data)=>{
        if(err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            })
        }else{
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data.toString());
        }
        res.end();
    })

    // res.end(util.inspect(url.parse(req.url))) //页面输出字符串形式的url

});

server.listen(3000,'127.0.0.1',()=>{
    console.log('打印提示') //在终端显示
})  //监听3000端口

