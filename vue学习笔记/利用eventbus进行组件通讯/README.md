# eventBus

## 调用方法

新建 eventBus.js 文件

内容为：

```js
import Vue from 'vue'

const eventBus = new Vue()

export { eventBus }
```

## 通讯方法

在需要使用的组件中引入 eventBus.js

给对象附上事件 如点击事件

```js
    // <div @click="resetComponent"></div>

    resetComponent() {
        eventBus.$emit('reset-component')
    }
```

在组件中

生命周期 mounted

```js
    mounted() {
        eventBus.$on('reset-component', () => {
        this.isDrop = false
      })
     }
```

需要注意的是：阻止事件冒泡

传入 event 参数 event.stopPropagation()
