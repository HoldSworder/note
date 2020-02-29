# Promise

## 使用案例

```js
//jq
new Promise((resolve, reject) => {
  $.ajax({
    url: 'xxx',
    data: {},
    type: 'post',
    success(res) {
      resolve(res)
    },
    error(err) {
      reject(err)
    }
  })
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
```

## 三种状态

- pending: promise 对象初始化状态为 pending
- fulfilled: 当调用 resolve，会由 pending=>fulfilled
- rejected: 当调用 reject，会由 pending=>rejected

> promise 状态 只能由 pending=>fulfilled/rejected,一旦修改就不能再变

## promise 对象方法

1. Promise.prototype.then()

   第一个参数是 resolve 的回调函数，第二个是 reject 的回调函数

2. Promise.resolve()/onFulfilled()

   将现有对象转化为 Promise 对象

   ```js
   const jsPromise = Promise.resolve($.ajax('/whatever.json'))

   Promise.resolve('foo)
   //等价于
   new Promise(resolve => resolve('foo'))
   ```

   有 4 种情况

   1. 参数是 Promise 实例，就直接返回实例

   2. 参数是一个有 then 方法的对象，将此对象转化为 Promise 对象，然后立即执行 then 方法

   3. 不是具有 then 方法的对象，或者不是对象。会返回一个新的 Promise 对象，状态为 resolved

   4. 不带任何参数 直接返回一个 resolved 状态的 Promise 对象

3. Promise.reject()/onRejected

   返回一个状态为 reject 的 Promise 实例

4. Promise.prototype.catch()

   用于捕获错误，更推荐用 catch，而不是 then 的第二个参数进行错误处理

5. Promise.prototype.finally()

   用于指定不管 Promise 对象最后状态如何都会执行的操作

   本质上是 then 方法的特例 不依赖于 Promise 的执行结果

6. Promise.all()

   该方法用于将多个 Promise 实例包装成一个新的 Promise 实例

   ```js
   const p = Promise.all([p1, p2, p3])
   ```

   如果不是 Promise 实例，就会先调用 Promise.resolve 方法，转化为 Promise 实例

   p 的状态由 p1,p2,p3 决定

   1. 只有 p1,p2,p3 的状态都变成`fulfilled`，p 才会变成`fulfilled`，此时 p1,p2,p3 的返回值会组成一个数组，传递给 p 的回调函数

   2. 只要有其中一个被`rejected`,p 就会变成`rejected`此时第一个被`rejected`的实例的返回值，会传递给 p 的回调函数

7. Promise.race()

   同样是将多个 Promise 实例包装成一个 Promsie 实例

   ```js
   const p = Promise.race([p1, p2, p3])
   ```

   只要有一个率先改变状态，p 的状态就会跟着改变，率先改变的 promise 实例的返回值，就会传递给 p 的回调函数

8. Promise.try()
   不论是同步代码还是异步代码都可以用这个方法包装成 Promise 对象使用 then 管理流程
