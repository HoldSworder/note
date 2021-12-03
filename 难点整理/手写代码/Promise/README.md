# Promise 的实现

```JS
//三个状态
const PENDING = 'pending',
      FULFILLED = 'fulfilled',
      REJECTED = 'rejected'

class Promise {
  constructor(fn) {
    this.state = PENDING  //初始状态
    this.value = null //fulfilled状态时的返回信息
    this.reason = null  //rejected状态时拒绝的原因
    this.onFulfilledCallbacks = []  //存储fulfilled状态对应的onFulfilled函数
    this.onRejectedCallbacks = [] //存储rejected状态对应的onRejected函数

    try{
      fn(this.resolve, this.reject)
    }catch(e) {
      this.reject(e)
    }

  }

  resolve(value) {
    if(this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
      this.onFulfilledCallbacks.map(cb => {
        cb = cb(this.value)
      })
    }
  }

  reject(reason) {
    if(this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejectedCallbacks.map(cb => {
        cb = cb(this.reason)
      })
    }
  }

}
```
