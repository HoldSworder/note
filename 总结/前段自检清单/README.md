# 一名合格前端工程师的自检清单

> https://juejin.im/post/5cc1da82f265da036023b628#heading-0

[判断数据类型](../../难点整理/手写代码/类型判断/README.md)

## js基础

### 变量和类型

1. js规定了几种语言类型

7中基本类型：String Number Boolean Undefined Null Object Symbol

2. js对象的底层数据结构是什么

3. Symbol的应用

实现私有属性/方法、使用Symbol用做对象属性名

4. js中的变量在内存中的具体存储形式

基本类型是保存在栈内存中的简单数据段，大小固定

引用类型是保存在堆内存中，大小不固定，栈内存中存放该对象的访问地址指向堆内存中的对象，js不允许直接访问堆内存中的位置，因此操作对象时，实际操作的是对象的引用

5. 基本类型对应的内置对象，以及他们之间的装箱拆箱操作

6. 理解值类型和引用类型

值类型有string/number/boolean/undefined/null 
引用类型（包装类型）String/Number/Boolean/Array/Object

7. null和undefined区别

null表示无 不存在的对象 转数值时为0

undefined表示缺少值 转数值时为NaN

8. 至少可以说出三种判断js数据类型的方法，以及他们的优缺点，如何准确判断数组类型

    [判断数据类型](../../难点整理/手写代码/类型判断/README.md)

    1. typeof(null/数组 会被检测为object)

    2. instanceof 判断对象原型链上是否存在prototype的实例(只能判断对象 new Number(2) != 2)

    3. contructor (2).contructor == Number.contructor(缺点在于如果人为改变原型就会出现问题)

    4. Object.prototype.toString.call(最好的方法)

9. 可能发生隐式类型转换的场景及转换原则

    1. 运算符
    2. ==

    重点
    1. 对象转字符串  [object, Object]
    2. 数组转数字   [] => 0   [1] => 1  [1,2] => NaN
    3. 引用类型转boolean  [] => true {} => true

10. 出现小数精度丢失的原因，js可以存储的最大数字、最大安全数字，js处理大数字的方法、避免精度丢失的方法

    原因是使用二进制计算0.1在二进制表示的是一个无线循环小数
    解决方法是先将小数位乘到整数 再除回来

    最大数Math.pow(2, 53) -1  2的53次方

### 原型和原型链

1. 理解原型设计模式以及js中的原型规则

[原型链](../../难点整理/难点/原型链/README.md)
[原型的继承](../../难点整理/难点/原型的继承/README.md)
[手写new](../../难点整理/手写代码/new/README.md)

2. new的原理
```js
function new(o, ...args) {
    const obj = Object.create(o.prototype)
    const ret = o.apply(obj, args)
    return typeof obj == 'object' ? ret : obj
}
```


