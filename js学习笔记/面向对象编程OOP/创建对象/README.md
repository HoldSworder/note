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

所谓构造函数就是一个普通的函数，只是内部使用了`this`变量。对构造函数使用`new`运算符，就能生成实例，并且`this`变量会绑定在实例对象上。

    var xiaoming = new Student('小明');
    xiaoming.name; // '小明'
    xiaoming.hello(); // Hello, 小明!

注意 如果不写`new`，这就是一个普通的函数，它返回`undefined`。但是，如果写了`new`，它就变成了一个构造函数，它版定的`this`指向新创建的对象，并默认返回`this`，也就是说，不需要在最后写`return this`；

新创建的`xiaoming`的原型链是：

    xiaoming --> Student.prototype --> Object.prototype --> null

利用函数`Student`创建的对象，不管是`xiaohong`还是`xiaojun`，原型均指向`Student`

用`new Student()`创建的对象还从原型上获得了一个`constructor`属性，它指向函数`Student`本身：

    xiaoming.constructor === Student.prototype.constructor; // true
    Student.prototype.constructor === Student; // true

    Object.getPrototypeOf(xiaoming) === Student.prototype; // true

    xiaoming instanceof Student; // true

总结：
-------

`Student.prototype`指向的对象就是`xiaoming` `xiaohong`的原型对象，这个原型对象自己还有个属性`constructor`，指向`Student`函数本身。

另外，函数`Student`有个属性`prototype`指向`xiaoming``xiaohong`的原型对象，电脑是`xiaoming ``xiaohong`这些对象没有`prototype`这个属性，但是可以用`_proto_`这个非标准用法来查看。

现在我们就认为`xiaoming``xiaohong`这些对象“继承”自`Student`。

因为`this`的指向不同所以 他们各自的`hello`函数也不同，虽然函数名和代码都是相同的

    xiaoming.name; // '小明'
    xiaohong.name; // '小红'
    xiaoming.hello; // function: Student.hello()
    xiaohong.hello; // function: Student.hello()
    xiaoming.hello === xiaohong.hello; // false

要想让创建的对象共享一个`hello`函数，根据对象的属性查找原则，我们只要把`hello`函数移动到`xiaoming``xiaohong`这些对象共同的原型上就可以了，也就是`Student.prototype`

    function Student(name){
        this.name = name;
    }

    Student.prototype.hello = function(){
        alert('Hello'+this.name+'!');
    }

忘记写new怎么办
-------

在strict模式下，`this.name = name`将报错，因为`this`绑定为`undefined`

在非strict模式下，`this.name=name`不报错，因为`this`绑定为`window`，于是无意间创建了全局变量`name`，并且返回`undefined`这个结果更糟糕

###为了区分普通函数和构造函数，按照约定，构造函数首字母应当大写，普通函数首字母应当小写

