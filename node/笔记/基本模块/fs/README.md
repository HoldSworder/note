# fs 模块

node 内置的**fs**模块就是文件系统模块，负责读写文件。

**fs**同时提供了异步和同步的方法。

## 异步读取文件

```js
var fs = require('fs')

fs.readFile('sample.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
```

回调函数接收两个参数。正常时**err**参数为**null**，**data**参数为读取的 string。错误时，**err**参数代表一个错误对象，**data**为**undefined**。

如果不是文本文件

例： 读取图片文件

```js
var fs = require('fs')

fs.readFile('sample.png', function(err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    console.log(data.length + ' bytes')
  }
})
```

读取二进制文件时，不传入文件编码时，回调函数的**data**参数将返回一个**Buffer**对象。在 node 中，**Buffer**对象就是一个包含 0 个或任意字节的数组（与 Array 不同）

**Buffer**对象可以和 String 作转换

```js
// Buffer -> String
var text = data.toString('utf-8')
console.log(text)

// String -> Buffer
var buf = Buffer.from(text, 'utf-8')
console.log(buf)
```

## 同步读文件

与异步相比多了一个**Sync**后缀，并不接受回调函数，

```js
var fs = require('fs')

var data = fs.readFileSync('sample.txt', 'utf-8')
console.log(data)
```

## 写入文件

```js
const fs = require('fs')

fs.writeFile('./text.txt', 'hello', err => {
  if (err) {
    console.log('error', err)
  } else {
    console.log('success')
  }
})
```
