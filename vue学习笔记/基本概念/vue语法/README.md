1.文本 最常见Mustache语法（双大括号）：
	<span>Message:{{msg}}</span>
	msg属性无论何时发生变化，都能第一时间更新在文本上。

    指令：v-once 在渲染一次之后解除绑定，不在随着msg的改变而渲染
	eg:<span v-once></span>

2.纯HTML 
    指令：v-html 输出html
	<div v-html="rawHtml"></div>

3.过滤器
	用于转换文本  由 | 符号指示

4.计算属性
	

5.Class与Style绑定
	利用v-bind指令，在v-bind:后可以用数组、计算属性、直接对象 在html中会自动渲染。

6.条件渲染
	v-if v-else指令能够起到条件判断的作用
		<h1 v-if="ok">Yes</h1>
		<h1 v-else>No</h1>
	切换多个元素
		<template v-if="ok">
		   <p></p>
		   <h1></h1>
		</template>
	v-else-if 指令
		<div v-if=type