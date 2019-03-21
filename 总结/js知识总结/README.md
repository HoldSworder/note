# js知识体系汇总

## 1、数据结构

js中有7种*数据类型*：string、number、boolean、null、undefined、symbol、object

其中object为*引用类型* 其余为*基本数据类型*

区别在于 基本数据类型存在**栈**中 引用类型存在**堆**中

基本数据类型是没有方法和属性的 

1. 包装类型

    当我们创建string、number、boolean时 js自动转化为包装类型String、Number、Boolean所以我们能使用js提供的默认方法

    包装类型在内存中只存在执行的一瞬间 然后立即被销毁

    ```js
    var name = 'JavaScript';
    var value = name.substr(2,1);

    //伪代码
    var obj = new String('JavaScript');
    var value = obj.substr(2,1);
    name = null;
    ```

2. 引用类型
    引用类型出了Object外，Date、Array、RegExp 也属于引用类型 

    引用类型也即对象类型，ECMA262 把对象定义为：**无序属性的集合，其属性可以包含基本值、对象或者函数。** 也就是说，对象是一组没有特定顺序的值 。由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度。因此，对象的值存储在堆(heap)中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问。具备这种存储结构的，都可以称之为引用类型 。


## 2、原型和原型链 