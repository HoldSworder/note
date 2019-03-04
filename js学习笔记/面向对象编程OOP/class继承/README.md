在ES6中引入了`class`关键字

`class`的目的就是让定义类更简单。

原本的写法：

    function Student(name) {
        this.name = name;
    }

    Student.prototype.hello = function () {
        alert('Hello, ' + this.name + '!');
    }

用`class`来写：

class Student{
    constructor(name){
        this.name = name;
    }

    hello(){
        alert('Hello, ' + this.name + '!');
    }
}

`class`定义的包含了构造函数`construtor`和定义在原型对象上的函数`hello()`（没有`function`关键字）这样就避免了过于分散的代码

最后，创建一个`Student`对象代码

    var xiaoming = new Student('小明');
    xiaoming.hello();

class继承
------

利用`extends`来实现继承：

例子：

    class PrimaryStudent extends Student {
        constructor(name) {
            super(name); // 记得用super调用父类的构造方法!
        }

        myGrade() {
            alert('I am at grade ' + this.grade);
        }
    }