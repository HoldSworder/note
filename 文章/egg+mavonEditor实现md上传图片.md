# egg+mavonEditor 实现 md 上传图片

实现 md 插入图片有以下几种方法

1. 使用图片外链

2. base64 存在数据库

3. 上传图片保存到服务器

本文主要实现方法 3

## 上传图片到服务器

```js
//vue文件
// <mavon-editor res='md' @imgAdd="imgAdd" />
imgAdd(pos:any, $file:any) {
  const file = new FormData()
  file.append('image', $file)

  this.$axios({
    method: 'post',
    url: api.uploadImg,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: file
  }).then((res: any) => {
    const url = res.data
    //使用ref获取md实例 利用img2url方法 将服务器返回的图片地址替换md里的地址
    this.$refs.md.$img2Url(pos, url)
  })
}
```

```js
// egg文件
const sendToWormhole = require('stream-wormhole') //抛出错误后消耗stream流 不然会卡死
const awaitStreamReady = require('await-stream-ready')//将管道操作变为promise方便使用await

public async uploadImg() {
  const { ctx } = this,
    stream = await ctx.getFileStream(), //获取上传图片流
    filepath = `app/public/upload/${path.basename(stream.filename)}`,//图片保存地址 在egg中需要存在public中保存静态文件
    //必须带http
    accessPath = 'http://127.0.0.1:7001' + `/public/upload/${path.basename(stream.filename)}`,
    write = fs.createWriteStream(filepath)//写入流
  try {
    await awaitStreamReady.write(stream.pipe(write))
  } catch (err) {
    sendToWormhole(stream)
    throw err
  }
  return accessPath
}
```
