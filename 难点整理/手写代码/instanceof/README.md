# instanceof

## 介绍
用于判断对象的类型 内部机制是通过判断对象的原型链是不是能找到类型的prototype

```js
    a instanceof Object
```

## 实现
```js
function instanceof(left, right) {
  let prototype = right.prototype
  let left = left.__proto__

  while(true) {
    if(left == prototype) {
      return true
    }else if(left == null || left == undefined) {
      return false
    }
    left = left.__proto__
  }
}
```