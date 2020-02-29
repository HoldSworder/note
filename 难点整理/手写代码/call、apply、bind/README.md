# 实现原理

将函数绑定到上下文 this 上作为其方法，然后执行该函数并返回值，最后删除上下文上的该方法

## call

```js
Function.prototype.call2 = function(ctx) {
  ctx = ctx || window
  ctx.fn = this
  let arg = [...arguments].slice(1)
  let result = ctx.fn(...arg)
  delete ctx.fn
  return result
}
```

## apply

```js
Function.prototype.apply2 = function(ctx) {
  ctx = ctx || window
  ctx.fn = this
  let result
  if (arguments[1]) {
    result = ctx.fn(arg)
  } else {
    result = ctx.fn()
  }
  delete ctx.fn
  return result
}
```

## bind
bind跟call、apply的区别在于 他不是直接返回运行结果 而是返回一个函数。而函数就有可能分为构造函数和普通函数 这里就需要进行处理函数使用new的情况
```js
Function.prototype.bind2 = function(ctx) {
  const _this = this
  const arg = [...arguments].slice(1)
  return function F() {
    if (this instanceof F) {  //判断是否是new
      return new _this(...arg, ...arguments)
    } else {
      return _this.apply(ctx, [...arg, ...arguments])
    }
  }
}
```
