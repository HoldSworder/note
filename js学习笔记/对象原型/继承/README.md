实现对象继承的方法

构造函数继承
==============
在构造函数中利用call或者apply方法

```js
　　function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
　　}
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```

非构造函数继承
--------
思路：利用原型链、浅拷贝、深拷贝

http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html