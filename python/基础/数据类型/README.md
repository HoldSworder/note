数据类型list 
---------
类似数组

len()函数可以获得list元素的个数：

classmates = ['a', 'b', 'c']

len(classmates) //3

可以用[]访问list中的元素

list的方法
--------

与array不同的是 可以用负值访问元素 [-1]即为最后一个元素
索引超出范围会报错

pop()方法 删除最后一个元素 pop(i)可以删除指定i索引的元素

append()方法 追加一个元素到末尾

insert(1, 'xxx') 把xxx元素插入到指定索引位置

数据类型tuple
--------

元组 一旦初始化就不能修改

classmates = ('a', 'b', 'c')

注意：定义一个只有一个元素的tuple需要加逗号避免歧义
t = (1,)




