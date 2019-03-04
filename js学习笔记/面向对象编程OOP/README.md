基本概念
------

在面向对象编程语言中都有类和实例的概念：

1. 类：类是对象的类型模版，例如，定义`Student`类来表示学生，类本身是一种类型，`Student`表示学生类型，但不表示任何具体的学生。

2. 实例：实例是根据类创建的对象，例如，根据`Student`类可以创建出`xiaoming`、`xiaohong`、`xiaojun`等多个实例，没个实例表示一个具体的学生，他们全都属于`Student`类型。

所以，类和实例是大多数面向对象编程语言的基本概念。

不过在js中，js不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。

原型概念
--------

原型是指当我想要创建`xiaoming`这个具体的学生时，我们并没有一个`Student`类型可用。可以利用一个现成的对象`robot`:

    var robot = {
        name: 'Robot',
        height: 1.6,
        run: function () {
            console.log(this.name + ' is running...');
        }
    };

这个对象拥有对象`xiaoming`所需要的名字，身高等内容 可以根据其来创建`xiaoming`，修改其为`Student`。

    var Student = {
        name: 'Robot',
        height: 1.2,
        run: function () {
            console.log(this.name + ' is running...');
        }
    };

    var xiaoming = {
        name: '小明'
    };

    xiaoming.__proto__ = Student;
    
最后一行代码将`xiaoming`的原型指向了对象`Student`,看上去`xiaoming`是从`Student`继承下来的

    xiaoming.name; // '小明'
    xiaoming.run(); // 小明 is running...

`xiaoming`有自己的`name`属性，但没有定义`run()`方法。不过，由于`xiaoming`是从`Student`继承下来的，只要`Student`有`run()`方法，`xiaoming`也可以调用：

JavaScript的原型链和java的class区别就在，他没有class的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型只想另一个对象而已。

如果你把`xiaoming`的原型指向其他对象：

    var Bird = {
        fly: function () {
            console.log(this.name + ' is flying...');
        }
    };

    xiaoming.__proto__ = Bird;

现在`xiaoming`已经无法`run()`了，他已经变成了一只鸟：

    xiaoming.fly();//小明 is flying...

