# 单例模式

## 单例模式的两个条件

- 确保只有一个实例
- 可以全局访问

```js
class Singleton {
  constructor(name) {
    this.name = name
  }

  getName() {
    alert(this.name)
  }
}

let getInstance = (function(name) {
  let instance = null
  return function(name) {
    if (!instance) {
      instance = new Singleton(name)
    }
    return instance
  }
})()

let a = getInstance('aaa')
let b = getInstance('bbb')
console.log(a === b)
```
