对象的基本结构：

var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

如果变量名包含特殊字符 需用""括起来
访问的时候也不能用.操作符  需要用["xxx"]来访问

delete 操作
delete xiaoming.age 删除age属性

in 操作符
检测是否存在属性 
"name" in xiaoming;//true or false
注意 可能是xiaoming继承来的属性

判断属性是否是xiaoming自身拥有 而不是继承来的可以使用
hasOwnProperty()方法
xiaoming.hasOwnProperty('name');//true or false
