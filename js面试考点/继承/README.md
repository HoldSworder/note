
## 原型链的继承
通过将子类的__proto__属性指向父类的prototype来实现继承
同时自身的prototype对自身是不可见的
```js
  obj.__proto__ = Parent.prototype
```

## 常用组合继承
```js
function Person(value) {
  this.val = value
}

Person.prototype.getVal = function() {
  console.log(this.val)
}

function Child(val) {
  Person.call(this, val)
}

Child.prototype = new Person()

const child = new Child(1)
```
这种继承方式优点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费。



