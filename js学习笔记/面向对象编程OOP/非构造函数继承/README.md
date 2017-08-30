不使用构造函数实现‘继承’

例子：

现在有一个对象，叫做‘中国人’

    var Chinese = {
　　　　nation:'中国'
　　};

还有个对象，叫做‘医生’

　　var Doctor ={
　　　　career:'医生'
　　}

怎样才能让‘医生’继承‘中国人’，

因为两个对象都是普通对象，不是构造函数，所以无法用构造函数的方法实现‘继承’

一、object()方法

　　function object(o) {
　　　　function F() {}
　　　　F.prototype = o;
　　　　return new F();
　　}

这个函数将子对象的prototype属性，指向父对象从而使得子对象与父对象连在一起

使用的时候，先在父对象的基础上，生成子对象：

    var Doctor = object(Chinese);

然后，再加上子对象本身的属性：

    Doctor.career = '医生';

这时，子对象就继承了父对象的属性

    alert(Docor.nation); //中国

除了这种方法外

还可以使用

二、浅拷贝

三、深拷贝

http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html