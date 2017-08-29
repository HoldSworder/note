js对每个创建的对象都会设置一个原型，只想它的原型对象。

当我们用`obj.xxx`访问一个对象的属性时，js引擎现在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有，就一直上溯到`Object.prototype`对象，最后如果还没有找多，就只能返回`undefined`。

例如，创建一个`Array`对象：

    var arr = [1,2,3];

其原型链是：
    arr -->Array.prototype --> Object.prototype -->null

`Array.prototype`定义了`indexOf()`、`shift()`等方法，因此可以在所有`Array`对象上直接调用这些方法。

当我创建一个函数时：

    function foo(){
        return 0;
    }

函数也是一个对象，它的原型链是：

    foo --> Function.prototype --> Object.prototype --> null

由于`Function.prototype`定义了`apply()`等方法，因此，所有函数都可以调用`apply()`方法。

很容易想到，如果原型链很长，那么访问一个对象的属性就会因为花更多的时间查找而变得更慢，因此不要把原型链搞的太长。

构造函数
---------

除了直接用{...}创建一个对象外，JavaScript还可以用一种构造函数的方法来创建对象:
定义一个构造函数：

    function Student(name) {
        this.name = name;
        this.hello = function () {
            alert('Hello, ' + this.name + '!');
        }
    }

所谓构造函数就是一个普通的函数，只是内部使用了`this`变量。