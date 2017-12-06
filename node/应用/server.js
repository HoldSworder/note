const http = require('http')

// 利用http.createServer()方法创建服务器
http.createServer((req, res) => {
  // 发送http头部
  // http状态值： 200：OK
  // 内容类型：text/plain
  res.writeHead(200, {'Content-Type': 'text/plain'})

  // 发送响应数据‘Hello World’
  // listen方法绑定8888端口
  res.end('Hello World\n')
}).listen(8888)
// 终端打印信息
console.log('Server running at http://127.0.0.1:8888/')