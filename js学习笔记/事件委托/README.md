事件委托
=========
指的不需要给所有后期加入的元素绑定事件

原理
-----------
根据事件冒泡的原理，点击元素 他的父元素会同时被点击

利用父元素的event.target来确定是哪个元素被点击了

event.target就指向被点击的元素

event.preventDefault()用于阻止事件的默认行为 如enter插入回车等（常用）
在vue中封装为default