#常用组合继承
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

#寄生组合继承
```js

```

#原型链的继承
通过将子类的__proto__属性指向父类的prototype来实现继承
同时自身prototype对自身是不可见的
所以当
```js
  obj.__proto__ = Parent.prototype
```

#new关键字的用法
```js
function Animal(name) {
  this.name = name
}

let cat = new Animal('cat') = { //伪代码
  let obj = {}  //新建一个对象
  obj.__proto__ = Animal.prototype  //将新对象（子）的proto属性指向父的prototype属性
  let result = Animal.call(obj, 'cat')  //将子元素的this指向自身
  return typeof result === 'object' ? result : obj
}

```