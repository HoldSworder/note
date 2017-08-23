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


变量提升
-----
js函数特点
会将整个函数体声明的变量‘提升’到顶部
但是提升变量的声明并不会提升变量的赋值
    function foo() {
        var x = 'Hello, ' + y;
        alert(x);
        var y = 'Bob';
    }

    foo();
语句var x = 'Hello, ' + y;并不报错，原因是变量y在稍后申明了。但是alert显示Hello, undefined，说明变量y的值为undefined。

命名空间
-----
全局变量会绑定到`window`上 使用相同的全局变量会造成冲突
最好的方法是将自己所有的变量和函数全部绑定到一个全局变量中。
    // 唯一的全局变量MYAPP:
    var MYAPP = {};

    // 其他变量:
    MYAPP.name = 'myapp';
    MYAPP.version = 1.0;

    // 其他函数:
    MYAPP.foo = function () {
        return 'foo';
    };