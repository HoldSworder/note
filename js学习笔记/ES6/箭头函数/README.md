箭头函数
=====

ES6标准新增的一种新的函数

    x => x*x

此箭头函数相当于

    function(x){
        return x*x;
    }

箭头函数相当于匿名函数 并且简化了函数定义。 箭头函数有两种格式，一种只包含一个表达式 省略了`{...}`和`return`

另一种可以包含多条语句

    x => {
        if(x>0){
            return x*x;
        }
        else{
            return -x*x;
        }
    }

如果参数不止一个 就需要用括号`()`括起来

    (x,y) => x*x + y*y 

如果要返回一个对象，就要注意
    x => {foo:x}
这么写会报错

因为函数体的`{...}`有语法冲突 所以要改为

    x => ({foo:x})


this相关问题
------

箭头函数内部的`this`是词法作用域 

不存在`this`绑定到`window`的情况

    错误：
    var obj = {
        birth: 1990,
        getAge: function () {
            var b = this.birth; // 1990
            var fn = function () {
                return new Date().getFullYear() - this.birth; // this指向window或undefined
            };
            return fn();
        }
    };



    this：
    var obj = {
        birth: 1990,
        getAge: function (year) {
            var b = this.birth; // 1990
            var fn = (y) => y - this.birth; // this.birth仍是1990
            return fn.call({birth:2000}, year);
        }
    };
    obj.getAge(2015); // 25
