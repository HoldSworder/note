盒模型
-----------------

css盒模型分为标准模型和IE模型

区别是标准模型的宽高是content 内容的宽高

IE模型的宽高计算的是 content + padding + border

利用box-sizing: content-box 标准/border-box IE 切换两种模型

获取盒模型宽高
---------------

dom.style.width/height       只支持内联样式

dom.currentStyle.width/height    IE支持

window.getComputedStyle(dom).width/height

dom.getBoundingClientRect().width/height

BFC(边距重叠解决方案)
==================

当两个元素垂直边距相接触时 边距会重叠合并为一个边距 值为最大的那一个

一般为：
1、垂直排列的两个同级元素
2、嵌套的父子元素

创建方法
1、float值不为none  
2、position值不为默认 如absulute
3、display不为默认
2、overflow: hidden
