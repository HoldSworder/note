# prop的双向绑定

子组件：this.$emit('update:visible', visible)， 使用update:my-prop-name 的模式触发事件
父组件：

```html
<components :visible="isVisible" @update:visible="val=>isVisible=val"></components>
//简写
<components :visible.sync="isVisible"></components>
```

子组件：

```js
this.$emit("update:visible", true);
```

vue 修饰符.sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定。
