创建一个原型对象的方法

使用构造函数

function person(name,age) {
    this.name = name;
    this.age = age;
}

实例这个原型

var you = new person('qzr',21)

使用构造函数的场景是每个属性都拥有不同数据 需要利用参数来进行赋值

但是如果利用构造函数进行相同值的构造 就会存在性能浪费的情况 

这个时候应该采取prototype的形式

```js
　　function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
　　　　this.type = "猫科动物";  //type是不变的
　　}

    Cat.prototype.type = "猫科动物"; //应该采取这种方式避免性能浪费
```