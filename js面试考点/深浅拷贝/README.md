浅拷贝
```js
Object.assign({}, obj)
OR
{...obj}
```

深拷贝
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

会忽略 undefined
会忽略 symbol
不能序列化函数
不能解决循环引用的对象