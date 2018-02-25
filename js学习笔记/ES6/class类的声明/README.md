在es6中新增class类声明

相对于以前的构造函数创建对象

```js
function stdinfo(name, age) {
    this.name = name;
    this.age = age;
}

stdinfo.prototype.getNames = function() {
    console.log('name' + this.name);
}

var p = new stdinto()
```

新的class类声明更加规范，看起来也容易理解

```js
class stdinfo {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getNames(){
        console.log('name' + this.name);
    } 
}

var p = new stdinfo()
```

变化：在class内定义函数方法不需要加function，每个class中必须有constructor，如果没有添加也会默认添加一个空的

class的继承
------------

在class中使用extends关键字进行继承

```js
class child extends parent {
    coding() {
        console.log('coding javascript')
    }
}

var c = new child();
```

如果子类中有constructor构造函数 则必须调用super  constructor函数只能同时存在一个

```js
class child extends parent{
    constructor(name, age) {
        super(name, age)
    }

    coding(){
        console.log('coding js')
    }
}

var c = new child('job', 30);
```