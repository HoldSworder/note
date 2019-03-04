```js
var obj = {x: 1}

function foo() {console.log(this.x)}

foo.call(obj)       //打印结果： 1
```
call和apply和bind均可以改变this指向

call与apply的区别在于
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

bind与他们的区别在于 不会直接执行 而其他两个会直接执行