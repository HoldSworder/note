创建一个原型对象的方法

使用构造函数

function person(name,age) {
    this.name = name;
    this.age = age;
}

实例这个原型

var you = new person('qzr',21)