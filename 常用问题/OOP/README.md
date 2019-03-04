继承
===============
使用call、apply进行继承

缺点：只能继承表层 不能继承原型链上的

原型链继承
===============
child.prototype = new parents()

原理：将child.prototype指向parents.__proto__ 从而指向原型链

缺点：改变某一个实例的时候 其他实例也会改变 因为原型链是一致的

组合继承
==============