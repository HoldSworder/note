# zlib 压缩

```js
const fs = require('fs')
const zlib = require('zlib')

let rs = fs.createReadStream('tree.jpg')
let gz = zlib.createGzip()
let ws = fs.createWriteStream('tree.jpg.gz')

rs.pipe(gz).pipe(ws)

rs.on('error', err => {
  console.log(err)
})
ws.on('finish', () => {
  console.log('成功')
})
```
