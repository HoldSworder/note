调用方法
--------

新建eventBus.js文件

内容为：

    import Vue from 'vue'

    const eventBus = new Vue()

    export { eventBus }

通讯方法
--------

在需要使用的组件中引入eventBus.js

给对象附上事件 如点击事件

    <div @click="resetComponent">

        resetComponent() {
			eventBus.$emit('reset-component')
		}

在组件中

生命周期mounted

    mounted() {
        eventBus.$on('reset-component', () => {
        this.isDrop = false
      })
     }

需要注意的是：阻止事件冒泡

传入event参数 event.stopPropagation()