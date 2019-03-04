default
--------

default就是指的函数参数的默认值

如果调用方法时忘记传参，传统方法是加上`type = type || 'cat'`来指定默认值

在es6中可以直接传入参数

    function animal(type = 'cat') {
        console.log(type)
    }

rest
-----------

rest是对参数arguments的扩展

用法：

    function animals(...types) {
        console.log(types)
        for(var i of types) {
            i
        }
    }

    animals('cat','dog','fish')

可以不用考虑传入了几个参数
