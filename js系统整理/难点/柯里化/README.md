# 柯里化

所谓柯里化 就是一个逐步接受参数的过程

例子:

```js
add(1)(2,3)(4) = 10
```

```js
function curry(fn, args = []) {
  return function() { //返回一个函数
    let allArgs = [...args, ...arguments]

    return allArgs.length >= fn.length //已收集的args数量达到fn的参数数量 就执行
      ? fn.apply(null, allArgs)
      : curry(fn, allArgs)
  }
}
```
