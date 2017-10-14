特点：
	1.双向绑定：不论是在html修改数据还是在js中修改都能直接反映在另一端。
	2.声明试渲染：不同于js的dom操作，利用vue提供的语法更简单的将数据渲染进dom。
	3.条件与循环：vue提供了很多指令，条件判断v-if、循环v-for。
	4.用户输入：利用v-on指令监听用户输入。简写@(@click=)。v-model实现表单输入和应用状态的双向绑定。
	5.组件化概念：将页面的每个部分拆分为组件进行开发，利用v-bind指令进行动态绑定class或src等(缩写:)。






指令eg：1.v-if:<p v-if="age>25">sdffasdf</p>
	根据后跟的条件判断是否渲染该元素。

    2.v-for:<tr v-for="xx in xxs">
	<td>{{ xx.name }}</td>
	<td>{{ xx.age }}</td>
	<td>{{ xx.sex }}</td>
	js:
	   data:{
		xxs:[{
		name:'xxx',
		age:'ccc',
		sex:'zzz',}]

    3.v-on:<button v-on:click="xxx"></button>
      js:
	methods{
	  xxx:function(){} }

    4.v-bind：<img v-bind:src="">
		<img :src="">缩写
	因为在html属性中无法实用{{}}写法进行动态改变，所以要利用v-bind做到动态变化。