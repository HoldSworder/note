# bind apply call
## apply和call
call和apply和bind均可以改变this指向
```js
var obj = {x: 1}

function foo() {console.log(this.x)}

foo.call(obj)       //打印结果： 1
```

## call与apply的区别
```js
var obj = {};
 
function foo(a, b, c) {
  console.log(b);
}
 
foo.call(obj, 1, 2, 3)   //打印结果： 2;
　　
var obj = {};
 
function foo(a, b, c) {
  console.log(b);
}
 
foo.apply(obj, [1, 2, 3])   //打印结果： 2;
```
## bind的区别
bind与他们的区别在于 不会**直接执行** 而是返回一个**函数** 另外两个会直接执行