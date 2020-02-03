# PATH模块
```js
const path = require('path')

let str = '/root/a/b/index.html'
console.log(path.dirname(str)) //路径
// /root/a/b

console.log(path.extname(str)) //后缀
// .html

console.log(path.basename(str)) //文件名
//index.html

//path.resolve() 路径解析，简单来说就是拼凑路径，最终返回一个绝对路径
let pathOne = path.resolve('rooot/a/b', '../c', 'd', '..', 'e')

//一般返回绝对路径，_dirname指的就是当前目录
let pathTwo = path.resolve(_dirname, 'build')
```

