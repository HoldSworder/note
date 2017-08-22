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
		<div v-if="type === 'A'">
		  A
		</div>
		<div v-else-if="type === 'B'">
		  B
		</div>
		<div v-else-if="type === 'C'">
		  C
		</div>
		<div v-else>
		  Not A/B/C
		</div>

	v-show
		用法与v-if大致一样 不用于v-if   
		v-show是改变display属性 元素会仍然存在与dom中 
		而v-if则是渲染 元素会被销毁与重新渲染

7.列表渲染
	

8.事件处理器
	v:on 监听用户事件

	事件修饰符 eg：.stop   v-on:click.stop="doThis" 阻止单击事件冒泡

	按键修饰符 eg：.enter  v-on:keyup.enter="submit" 捕获enter键
