# 变量

## undefined 和 null

如果变量未赋值 取其值为 undefined

undefined 和 null 转化为 boolean 都为 false

_null 转化为数字为 0_

_undefined 转化为数字为 NaN_

## 函数提升

```js

  console.log(foo1); // [Function: foo1]
  foo1(); // foo1
  console.log(foo2); // undefined
  foo2(); // TypeError: foo2 is not a function
  function foo1 () { //函数声明
  console.log("foo1");
  };
  var foo2 = function () {//函数表达式
  console.log("foo2");
  //函数提升 只会提升函数声明 不会提升函数表达式
```

## const

const 用于声明一个只读的常量

但是对于对象或数组则可以修改值

```js
const a = {
  name: 'leo',
  age: 25
}

a.name = 'pingan'

// a => {name: "pingan", age: 25}

const b = ['hi', 'leo']

b[1] = 'pingan'

// b => ["hi", "pingan"]
```

这是因为 引用类型保存的是指针 修改其值不会报错 只保证指针不会变化
