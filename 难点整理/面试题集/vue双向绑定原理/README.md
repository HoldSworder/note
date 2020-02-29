# vue双向绑定原理

## 实现监听器Observer

1. 使用Object.defineProperty()

```js
let person = {}

Object.defineProperty(person, 'name', {
  get() {
    console.log('name属性被读取')
    return val
  }

  set(newVal) {
    console.log('name属性被修改')
    return newVal
  }
})
```

2. 封装Observer对象

```js
class Observer {
  constructor(obj) {
    this.obj = obj

    this._observable()
  }

  _observable() {
    const OBJ = this.obj
    for(const key in OBJ) {
      this._defineReactive(OBJ, key, OBJ[key])
    }
  }

  _defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      get() {
        console.log(`${key}属性被读取`)
        return val
      },

      set(newVal) {
        console.log(`${key}属性被修改`)
        val = newVal
      }
    })
  }
}

```

## 订阅器Dep实现

### 发布-订阅设计模式

又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态改变时，所有依赖于它的对象都将得到通知

### 订阅器的实现

```js
class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

Dep.target = null
```
```js
//vue中

 _defineReactive(obj, key, val) {
   const dep = new Dep()

   Object.defineProperty(obj, key, {
     get() {
       if(Dep.target) {
         dep.addSub(Dep.target)
       }
       return val
     },
     set(newVal) {
       if(newVal == val) {
         return 
       }

       val = newVal
       dep.notify()
     }
   })
 }
```

## 订阅者Watcher实现

```js
class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm
    this.exp = exp //需要监听的属性
    this.cb = cb  //回调
    this.value = this.get() //初始化时调用exp会执行observe中的get方法 将该watcher加入dep中
  }

  get() {
    Dep.target = this
    const value = this.vm.data[this.exp] 
    Dep.target = null
    return value
  }

  update() {
    this.run()
  }

  run() {
    const value = this.vm.data[this.exp]
    const oldVal = this.value
    if(value !== value) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  }
}
```