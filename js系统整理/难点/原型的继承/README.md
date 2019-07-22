# 原型的继承

1. 原型链继承

```js
function Father() {
  this.prop = true
}

Father.prototype.aa = function() {
  console.log(this)
}

function Son() {
  this.sonProp = false
}

Son.prototype = new Father() //*

//缺点：1.原型链中包含引用类型时，该值会被所有实例共享，牵一发动全身
//2. 无法向父辈传递参数
```

2. 经典继承(借用构造函数)

```js
function Father(name) {
  this.name = name
  this.color = ['red', 'blue', 'green']
  this.aa = function() {
    console.log(this)
  }
}

Father.prototype.bb = function() {
  console.log(this)
}

function Son() {
  Father.call(this) //*
}

let a = new Son()
a.color.push('black')
let b = new Son()

a.color //"red,blue,green,black"
b.color //"red,blue,green"
a.bb //undefined

// 解决了原型链方法的问题
// 缺点 无法找到父辈定义的方法
```

3. 组合继承(伪经典继承)(最常用)
   将原型链和借用构造函数的技术组合到一块

```js
function Father(name) {
  this.name = name
  this.number = [1, 2, 3]
}

Father.prototype.sayName = function() {
  console.log(this.name)
}

function Son() {
  Father.call(this, 'son') //*
}

Son.prototype = new Father() //*

//优点：继承了上述两种方法的优点，既通过在原型上定义方法实现了函数复用,又能保证每个实例都有它自己的属性
//缺点：调用了两次父类的构造函数 造成了不必要的浪费
```

4. 原型继承

```js
// 原理是对传入对象进行浅复制
function object(o) {
  function F() {} // 创建一个临时性的构造函数
  F.prototype = o
  return new F()
}

let person = {
  num: [1, 2, 3]
}

let son = object(person)

// 后被规范为object.create()方法
// 缺点：和原型链继承类似 包含引用类型值的属性会共享 牵一发动全身
```

5. 寄生式继承

```js
function createAnother(original) {
  var clone = object(original) //通过调用object函数创建一个新对象
  clone.sayHi = function() {
    //以某种方式来增强这个对象
    alert('hi')
  }
  return clone //返回这个对象
}
```

6. 寄生组合式继承
```js
function Father(name) {
  this.name = name
  this.number = [1, 2, 3]
}

Father.prototype.sayName = function() {
  console.log(this.name)
}

function Son() {
  Father.call(this, 'son') //*
}

// 开始实现
// Object.create 创建没有实例属性的父类实例
let p = Object.create(Father.prototype)
// 修改子类构造函数原型对象
Son.prototype = p
// 这里的 p 只是个普通对象，没有 constructor 属性，手动添加一下
p.constructor = Son
```
