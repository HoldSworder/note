原型继承
==========

例子：

现在有一个‘动物’对象的构造函数

        function Animal(){
    　　　　this.species = "动物";
    　　}

还有一个‘猫’的构造函数

        function Cat(name,color){
    　　　　this.name = name;
    　　　　this.color = color;
    　　}

如何让‘猫’继承‘动物’呢

一、构造函数的绑定
------
最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，在子对象中加入

    function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
　　}
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物

二、使用prototype属性
---------
如果‘猫’的prototype对象，指向一个Animal的实例，那么所有‘猫’的实例，就能继承Animal了

三、直接继承prototype

四、利用空对象作为中介

五、拷贝继承

五种思路

http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html