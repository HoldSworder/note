# Stream 流

**fs.readFile**和**fs.writeFile**的工作流程是先把整个文件读取到内存中，然后再一次性写入，对于稍大的文件就不适用了，会导致内存不足

更好的方式是边读边写（管道流），就像水流经过水管一样，进水多少，出水多少，这个水管就是占用的资源（内存），不会过于大

```js
const fs = require('fs')

//读取流: fs.createReadStream()
//写入流: fs.createWriteStream()
let rs = fs.createReadStream('a.txt')
let ws = fs.createWriteStream('a2.txt')

rs.pipe(ws)

rs.on('error', err => {
  console.log(err)
})
ws.on('finish', () => {
  console.log('success')
})
```

流式操作，就是一直读取，它是个连续的过程，如果一边快一边慢，或者一边出错没衔接上也没关系，它会自动处理，不用我们自己去调整其中的误差。另外，我们没有直接使用 stream 模块，是因为 fs 模块引用了它并对其做了封装，所以用 fs 即可。
