# 实现原理
将函数绑定到上下文this上作为其方法，然后执行该函数并返回值，最后删除上下文上的该方法

## call的实现
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
  if(arguments[1]) {
    result = ctx.fn(arg)
  }else {
    result = ctx.fn()
  }
  delete ctx.fn
  return result
}
```

## call
```js
Function.prototype.bind2 = function(ctx) {
  const _this = this
  const arg = [...arguments].slice(1)
  return function() {
    const bindArg = [...argument]
  }
}
```