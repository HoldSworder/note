# 深浅拷贝
区别在于深拷贝可以拷贝对象嵌套对象的情况

## 浅拷贝
```js
Object.assign({}, obj)
OR
{...obj}
```

## 深拷贝
当对象中嵌套对象就需要深拷贝
```js
let a = {
  aa: {
    aaa: ''
  }
}

let b = JSON.parse(JSON.stringify(a))
```

但是该方法也是有局限性的：

* 会忽略 undefined
* 会忽略 symbol
* 不能序列化函数
* 不能解决循环引用的对象

```js
function deepCopy(obj) {
  if(typeof obj !== 'object') return obj
  let newObj = obj instanceof Array ? [] : {}
  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
```