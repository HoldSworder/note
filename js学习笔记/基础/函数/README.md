arguments关键字
----
在函数中arguments关键字永远指向传入的所有参数</br>
常用于取到传入参数的数量  arguments.length

rest参数
----
在函数的参数后加入 ...rest参数 即可以数组的形式返回多余的传入参数</br>
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []