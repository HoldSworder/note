# 判断 js 数据类型

js 中原始类型有 number、string、undefined、null、boolean、symbol

## 1. typeof

```js
typeof 1 //number
typeof '1' //string
typeof undefined //undefined
typeof true //boolean
typeof Symbol() //symbol

typeof null //object
typeof [] //object
typeof {} //object
typeof console.log //function
```

**结论：除了数组和 null 都能正确判断**

## 2. instanceof

用于测试一个对象在其原型链中是否存在一个构造函数 prototype 属性，也就是判断是否是某一数据类型的实例

```js
2 instanceof Number //false 非实例
new Number(2) instanceof Number //true

[] instanceof Array //true
{} instanceof Object  //true
console.log instanceof Function //true
```

**结论：数组、对象和函数均能正确判断**

## 3. constructor

```js
;((((((2).constructor ===
  Number(
    //true
    true
  ).constructor) ===
  Boolean(
    //true
    'str'
  ).constructor) ===
  String(
    //true
    []
  ).constructor) ===
  Array(
    //true
    console.log
  ).contructor) ===
  Function(
    //true
    {}
  ).constructor) ===
  Object //true
```

但是当人为的改动对象的原型，就会有问题

```js
function Fun() {}

Fun.prototype = new Array()

let f = new Fn()

f.constructor === Fn //false
f.constructor === Array //true
```

## 4. Object.prototype.toString

最完善的办法

```js
const a = Object.prototype.toString

console.log(a.call(2)) //[object Number]
console.log(a.call(true)) //[object Boolean]
console.log(a.call('str')) //[object String]
console.log(a.call({})) //[object Object]
console.log(a.call([])) //[object Array]
console.log(a.call(console.log)) //[object Function]
console.log(a.call(undefined)) //[object Undefined]
console.log(a.call(null)) //[object Null]
console.log(a.call(Symbol())) //[object Symbol]
```
