# 函数的防抖和节流

两种方法的使用场景都在高频触发事件的时候

## 函数防抖

函数防抖的意思是指在指定时间内触发事件 只会执行一次 如果重复触发则会重新计时（n秒才能执行下一次函数）

分为立即执行与非立即执行

  1. 非立即执行

    ```js
    function debounce(func, wait = 50) {
      let timeout  //闭包缓存计时器id
      return function(...args) {
        const ctx = this

        if(timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
          func.apply(ctx, args)
        }, wait)
      }
    }
    ```

  2. 立即执行

    ```js
    function debounce(func, wait = 50) {
      let timeout
      return function(...args) {
        const ctx = this

        if(timeout) clearTimeout(timeout)

        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        }, wait)
        
        if(callNow) func.apply(ctx, args)
      }
    }
    ```

  3. 综合

    ```js
    function debounce(func, wait = 50, immediate = true) {
      let timeout
      return function(...args) {
        const ctx = this

        if(timeout) clearTimeout(timeout)

        if(immediate) {
          let callNow = !timeout
          timeout = setTimeout(() => {
            timeout = null
          }, wait)
          
          if(callNow) func.apply(ctx, args)
        }else {
          timeout = setTimeout(() => {
            func.apply(ctx, args)
          }, wait)
        }
      }
    }
    ```

## 函数节流

在连续触发事件中n秒只触发一次

一般有定时器版和时间戳版 区别在于时间戳版的函数触发在时间段开始的时候 定时器版是在结束的时候

1. 时间戳版

```js
function throttle(func, wait = 50) {
  let previous = 0
  return function(...args) {
    const ctx = this
    let now = Date.now()
    if(now - previous > wait) {
      func.apply(ctx, args)
      previous = now
    }
  }
}
```

2. 计时器版

```js
function throttle(func, wait = 50) {
  let timeout
  return function(...args) {
    const ctx = this
    if(!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(ctx, args)
      }, wait)
    }
  }
}
```
