# 发布-订阅模式

```js
class Event {
  constructor() {
    //事件容器
    handlers = {}
  }

  //添加事件
  addEventListener(type, handler) {
    if (!(type in this.handlers)) {
      this.handlers[type] = []
    }

    this.handlers[type].push(handler)
  }

  //触发
  dispatchEvent(type, ...params) {
    if (!(type in this.handlers)) {
      return new Error('未注册该事件')
    }

    this.handlers[type].forEach(handler => {
      handler(...params)
    })
  }

  //删除事件
  removeEventListener(type, handler) {
    if(!(type in this.handlers)) {
      return new Error('无效事件')
    }
    if(!handler) {
      delete this.handlers[type]
    }else {
      const idx = this.handlers[type].findIndex(ele => ele === handler)
      if(idx === undefined) {
        return new Error('无该绑定事件')
      }
      //移除事件
      this.handlers[type].splice(idx, 1)
      if(this.handlers[type].length === 0) {
        delete this.handlers[type]
      }
    }
  }
}
```
