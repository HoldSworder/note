# 工厂模式

构造函数和创建者分离，对new操作进行封装

隐藏创建实例的复杂逻辑，只暴露接口

符合开放封闭原则

```js
class Man {
  constructor(name) {
    this.name = name
  }
  alertName() {
    alert(this.name)
  }
}

class Factory {
  static create(name) {
    return new Man(name)
  }
}

Factory.create('Qzr').alertName()
```