arguments关键字
----

在函数中arguments关键字永远指向传入的所有参数
常用于取到传入参数的数量  arguments.length

rest参数
----

在函数的参数后加入 ...rest参数 即可以数组的形式返回多余的传入参数

```js
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
```

变量提升
-----

js函数特点
会将整个函数体声明的变量‘提升’到顶部
但是提升变量的声明并不会提升变量的赋值

```js
    function foo() {
        var x = 'Hello, ' + y;
        alert(x);
        var y = 'Bob';
    }

    foo();
```

语句var x = 'Hello, ' + y;并不报错，原因是变量y在稍后申明了。但是alert显示Hello, undefined，说明变量y的值为undefined。

命名空间
-----

全局变量会绑定到`window`上 使用相同的全局变量会造成冲突
最好的方法是将自己所有的变量和函数全部绑定到一个全局变量中。

```js
    // 唯一的全局变量MYAPP:
    var MYAPP = {};

    // 其他变量:
    MYAPP.name = 'myapp';
    MYAPP.version = 1.0;

    // 其他函数:
    MYAPP.foo = function () {
        return 'foo';
    };
```

类似于jq 或者 vue

局部作用域
-----

js的变量作用域实际上是在函数内部  for循环等是不存在局部作用域的
在ES6中引入了新的关键字`let`用来代替`var`可以申明一个块级作用域

```js
    function foo() {
        for (var i=0; i<100; i++) {
            //
        }
        i += 100; // 仍然可以引用变量i
    }


    function foo() {
        var sum = 0;
        for (let i=0; i<100; i++) {
            sum += i;
        }
        i += 1; // SyntaxError
    }
```

常量
-----

ES6定义新关键字`const`来定义常量 于`let`一样具有块级作用域

```js
    const PI = 3.14;
    PI = 3; // 某些浏览器不报错，但是无效果！
    PI; // 3.14
```

方法
=====

在一个对象中绑定函数，成为这个对象的方法

```js
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
    };

    xiaoming.age; // function xiaoming.age()
    xiaoming.age(); // 今年调用是25,明年调用就变成26了
```

this
------

this在一个方法内部是一个特殊变量，他始终只想当前对象，也就是`xiaoming`这个变量

this只在`age`方法的函数内指向`xiaoming`假如在函数内部定义的`this`是会报错

在strict模式下 `this`会指向`undefined` 非strict模式下 会指向全局对象`window`

改进办法为

在方法内的函数一开始就利用`that`变量 捕获`this`

    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            var that = this; // 在方法内部一开始就捕获this
            function getAgeFromBirth() {
                var y = new Date().getFullYear();
                return y - that.birth; // 用that而不是this
            }
            return getAgeFromBirth();
        }
    };

    xiaoming.age(); // 25

apply
-----

可以利用函数本身的`apply`方法 定义`this`的指向

    function getAge() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }

    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: getAge
    };

    xiaoming.age(); // 25
    getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

参数为函数本身的参数

另一个与apply()类似的方法是call()，唯一区别是：

apply()把参数打包成Array再传入；

call()把参数按顺序传入。

比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：

    Math.max.apply(null, [3, 5, 4]); // 5
    Math.max.call(null, 3, 5, 4); // 5
    对普通函数调用，我们通常把this绑定为null。

装饰器
-------

利用`apply`可以动态改变函数的行为

JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。

现在假定我们想统计一下代码一共调用了多少次parseInt()，可以把所有的调用都找出来，然后手动加上count += 1，不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的parseInt()：

    var count = 0;
    var oldParseInt = parseInt; // 保存原函数

    window.parseInt = function () {
        count += 1;
        return oldParseInt.apply(null, arguments); // 调用原函数
    };

    // 测试:
    parseInt('10');
    parseInt('20');
    parseInt('30');
    count; // 3

高阶函数
======

指的函数可以接收另一个函数作为参数 这种函数被称为高阶函数

    function add(x, y, f) {
        return f(x) + f(y);
    }

map方法
------

利用`array`的`map()`方法可以将函数代入数组 对数组每个元素进行函数运算

    function pow(x) {
        return x * x;
    }

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

reduce方法
------

Array的`reduce()`方法把一个函数作用在这个数组的所有元素上 接受2个参数

即把数组中的元素两两按顺序传入reduce()的函数中

比方说对一个Array求和，就可以用reduce实现：

    var arr = [1, 3, 5, 7, 9];
    arr.reduce(function (x, y) {
        return x + y;
    }); // 25

tilter()
-----

用于筛选函数
和map一样把数组所有元素作用于函数 根据返回值`true or false`决定保留还是丢弃
