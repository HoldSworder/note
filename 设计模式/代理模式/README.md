# 代理模式

为对象提供一个代用品或占位符，以便控制对它的访问

```js
//通过loading图占位
let imgFunc = (function() {
  let imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc(src) {
      imgNode.src = src
    }
  }
})()

let proxyImage = (function() {
  let img = new Image()
  img.onload = function() {
    imgFunc.setSrc(this.src)
  }
  return {
    setSrc(src) {
      imgFunc.setSrc('./loading.gif')
      img.src = src
    }
  }
})()

proxyImage.setSrc('./pic.png')
```
