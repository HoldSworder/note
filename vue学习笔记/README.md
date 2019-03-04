通过js引入图片
-------

通过js引入图片时需要使用 `require`

只有使用`require`webpack才能正确引入图片

require('../saf/sfasdf/asf.jpg')

css作用域
---------
在style标签中设置scoped属性 即可限定作用域在当前页面或组件

<style scoped></style>


插槽slot
---------
使用<slot></slot>进行组件插槽

多个插槽使用name定位

<slot name='a'><slot>

<span slot='a'></span>

获取dom ref
-------------
在dom中绑定ref属性

<div ref='div'></div>

即可使用this.$refs.div获取div元素 不用document了

注意需要在dom渲染完成后使用 即mounted函数中 或者利用$nextTick()