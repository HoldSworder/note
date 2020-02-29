# js 中的事件循环

首先 js 是一个单线程语言。

## 执行栈与任务队列

### 任务队列

当执行某个函数或 ajax 等，指定了回调函数，这些事件发生时，事件表会将回调函数添加至**任务队列（task queue）**，遵循先进先出原则进行执行

### 执行栈

执行任务队列中的某个任务，这个被执行的任务就称为执行栈

### 主线程

主线程规定现在执行执行栈中的哪个事件

主线程循环：主线程会不停的从执行栈中读取事件，会执行完所有栈中的同步代码

**当主线程将执行栈中所有的代码执行完，主线程会去查看任务队列是否有任务。**如果有，那么会依次执行任务队列中的回调函数

### js 异步执行的运行机制

1. 所有任务都是在主程序上执行，形成一个执行栈
2. 主线程外还存在一个任务队列。只要有异步任务有了结果，就在‘任务队列’中放置一个事件
3. 一旦“执行栈”中的所有同步任务执行完毕，系统就会读取‘任务队列’。那些对应的异步任务，结束等待状态，进入执行栈并开始执行。
4. 主线程不断重复上面的第三步

## 宏任务和微任务

异步任务分为**宏任务（macrotask）**和**微任务（microtask）**，不同的 API 注册的任务会一次进入自身对应的队列中，然后等待 Event Loop 将它们依次压入执行栈中执行。

**宏任务(macrotask)**：
script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)

**微任务(microtask)**：
Promise、 MutaionObserver、process.nextTick(Node.js 环境）

## Event Loop(事件循环)

事件循环中，每次循环称为 tick，每次 tick 的任务如下：

- 执行栈选择最闲进入队列的宏任务（通常是 script 整体代码），如果有则执行
- 检查是否存在微任务，如果存在则不停的执行，直至清空微任务队列
- 更新 render（每次事件循环，浏览器都可能会更新渲染）
- 重复以上步骤

总结： 宏任务>所有微任务>宏任务

## 面试题

```js
// 执行顺序问题，考察频率挺高的，先自己想答案**
setTimeout(function() {
  console.log(1)
})
new Promise(function(resolve, reject) {
  console.log(2)
  resolve(3)
}).then(function(val) {
  console.log(val)
})
console.log(4)

// 2431
```
