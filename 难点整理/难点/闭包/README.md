# 闭包
闭包作为js中的一大难点，总的来说就是：闭包可以让一个函数访问并操作其声明时的作用域中的变量和函数，并且，即使声明时的作用域消失了，也可以调用

缺点就是闭包的信息会一直保存在内存里。解决方法是，在必要的时候清除引用，就可以在下次垃圾回收中清除闭包

## 垃圾回收
从垃圾回收的角度来看闭包，有变量持续引用闭包内容时，就不会被垃圾回收从而持续保存在内存中