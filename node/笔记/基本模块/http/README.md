# HTTP模块

通过
let http = require('http');
来加载http模块

```js
const http = require('http');
http.createServer((req, res) => { // 开启一个服务
  console.log('请求来了'); // 如果你打开 http://localhost:8888，控制台就会打印此消息
  res.write('hello'); // 返回给页面的值，也就是页面会显示 hello
  res.end(); // 必须有结束的标识，否则页面会一直处于加载状态
}).listen(8888); // 端口号
```