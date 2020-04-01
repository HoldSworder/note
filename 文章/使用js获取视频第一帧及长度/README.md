# 使用js获取视频第一帧及长度

只有在使用chrome内核的环境下才能使用 包括浏览器、electron

```js
function getVideoBase64 ({url, width, height}) {
  return new Promise((resolve, reject) => {
    let video = document.createElement('video')
    video.setAttribute('crossOrigin', 'anonymous')  //解决跨域问题
    video.setAttribute('src', url)
    video.setAttribute('width', width)
    video.setAttribute('height', height)
    video.setAttribute("preload", 'auto') //只有加上这一属性才能稳定获取
    video.addEventListener('loadeddata', function() {
      let canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d').drawImage(video, 0, 0, width, height)
      const data = canvas.toDataURL('image/jpeg') //图片转换成base64
      const duration = video.duration //视频长度
      resolve(data)
    })
  })
}
```