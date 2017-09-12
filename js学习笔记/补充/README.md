arguments
-----------
arguments保存了函数所有的参数

function log(){
    console.log(arguments)
}

log(asdf,dfaf)


 变量名命名规则
-------------
 变量名和函数名只能包含 字母、_下划线或数字
 并且只能以 字母和下划线开头，不能以数字开头
 在现代的 JavaScript 中, 汉字也是字母


 调试
--------

    var log = function(){
        console.log.apply(console,arguments)
    }

字符串包含
--------

includes

'impossible'.include('poss') //true

测试函数
------

    function ensure(condition,message) {
        if(!condition) {
            console.log(message)
        }
    }


----------
 var log = function(){
     console.log.apply(console,arguments)
 }

 循环控制
----------

break 终止循环

continue 跳过本次循环

高阶函数
=======

简单说就是参数传递函数
