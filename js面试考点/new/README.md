# 当我们使用new的时候做了什么
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