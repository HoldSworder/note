选择器
------

    document.querySelector('')     只能取到第一个
    document.querySelectorAll('')  可以取到所有 如class

用法与jq一致  来源于jq

    getAttribute('')

用于取属性

    hasAttribute('')

用于查询属性是否存在，

    removeAttribute('')

移出属性

    attributes

获取所有属性

    document.createElement('')

创建元素

    classList.add().remove()

添加删除class


事件
=========

绑定事件
-----
xxx.addEventListener('click',function)

segmentcontrol 实现单选 原生radiobutton不好用

同选项卡

```js
var buttons = document.querySelectorAll('.radio-button')

for(var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    button.addEventListener('click', function(event){
        var self = event.target //用evevt.target趋势响应时间的元素
        vlearActive()
        self.classList.add('active')
    })
}

```

toggle函数
----------
classList.toggle('')

如果有就删掉 没有就加上

