# vue相关问题整理

1. SPA单页面的优缺点

    优点：
    * 用户体验好，快，内容的改变不需要重新加载整个页面，避免不必要的跳转和渲染
    * 相对服务器压力小
    * 前后端职责分离，架构清晰，前端进行交互，后端负责数据处理

    缺点：
    * 初次加载耗时长
    * SEO难度大，需要借助SSR服务端渲染

2. v-show和v-if的区别

3. Class与Style如何动态绑定

4. Vue的单向数据流

    prop的子组件无法改变父组件，而父组件可以通过更新prop更新子组件

    子组件想要修改父组件只能通过$emit派发一个自定义事件，由父组件监听，收到消息后由父组件更改

5. computed和watch的区别

6. 直接给数组或对象赋值，vue无法检测到变化

vue实现响应式的原理是使用**Object.defineProperty**在数据初始化的时候给数据加上了getter和setter

并且包装了数组的一些方法

所以无法使用索引值进行数组的设值**this.arr[index] = newValue**

也无法给对象新增值**this.obj[index] = newValue**

为了解决这个问题可以使用

```js
this.arr.splice(indxe, 1, newValue)

this.$set(this.arr, index, newValue)
```

7. vue的生命周期

    生命周期 | 描述
    - | - | -
    beforeCreate | 组件实例被创建之初，组建的属性生效之前（整个页面调用之前）
    created | 组件实例已经完全创建，属性也已经绑定，但真实dom还没有生成，$el还不可用
    beforeMount | 挂在之前被调用：相关的render函数首次被调用
    mounted | el被新创建的vm.$el替换，并挂载到实例上之后调用（dom被虚拟dom替代）
    beforeUpdate | 组件数据更新之前调用，发生在虚拟DOM打补丁之前
    update | 组件数据更新之后
    activated | 被keep-alive缓存的的组件激活时调用
    deactivated | 被keep-alive缓存的组件停用时调用
    beforeDestory | 组件销毁前调用
    destoryed | 组件销毁后调用

8. 父组件和子组件生命周期钩子函数执行顺序

    * 加载渲染过程

        父beforeCreate => 父created => 父beforeMount => 子beforeCreate => 子created => 子beforeMount => 子mounted => 父mounted

9. 在哪个生命周期内调用ajax

10. 在什么阶段才能访问操作DOM

    mounted

11. 如何在父组件监听到子组件的生命周期

    1. 通过$emit 在子组件生命周期中触发
    2. 通过@hook监听

12. keep-alive
keep-alive是vue内置的一个组件，可以使被包含的组件保留状态，避免重新渲染
* 一般结合路由和动态组件一起使用，用于缓存组件
* 提供include和exclude属性
* 对应activated和deactivated两个钩子函数

13. 组件中data为什么是一个函数

14. v-model的原理
    根据元素的不同 自动加上响应的事件

15. 组件通信
    
    [文章](../../文章/vue中父子双向绑定数据的方法.md)

16. Vuex

17. Vue SSR

    * 优点
        1. 更好的SEO
        2. 更快的首屏加载

    * 缺点
        1. 服务器负载
        2. 开发条件(只支持beforcreated created两个钩子函数 导致一些库需要特殊处理)

18. vue-router 路由模式
    1. hash
    2. history
    3. abstract(支持node服务器端 没有发现浏览器api将会自动强制进入这个模式)

19. router中hash和history的实现原理

    1. hash
        通过获取#后面的hash值进行页面跳转 本身是作为页面定位的锚点的
        ```js
            window.location.hash = 'qzr' //www.qzran.cn#qzr

            window.addEventListener('hashchange', () => {})
        ```
    
    2. history模式

        优势：避免影响hash作为锚点 hash传参是基于url有所限制 而history可以传递复杂参数

        缺点：history改变url会导致浏览器发送请求 所以需要在服务器做处理 匹配不到任何资源需要返回同一页面

        ```js
        window.history.back()
        window.history.forward()
        window.history.go(1)

        window.addEventLIstener('popstate', () => {})
        ```

20. MVVM

    model-view-viewmodel

21. vue是如何实现数据的双向绑定的

    [双向绑定原理](../面试题集/vue双向绑定原理/README.md)

22. vue怎么实现对象和数组的监听

    遍历、递归

23. Proxy与Object.defineProperty优劣

    1. Proxy的优势

        * Proxy可以直接监听对象而非属性
        * Proxy可以直接监听数组的变化
        * Proxy有新增许多拦截方法
        * Proxy返回的是一个新对象，可以直接操作新对象达到目的
        * Proxy是新标准会受到持续性能优化

    2. Object.defineProperty的优势

        * 兼容性好 兼容到IE9

24. vue怎么用vm.$set()解决对象新增属性不能响应的问题

    如果是数组 就直接splice触发响应式 vue对splice进行了响应的封装

    如果是对象 就调用defineReactive方法进行响应式处理

25. 虚拟DOM的优缺点

    优点：

    * 保证性能下限：相比真实DOM的渲染 性能会优化很多
    * 无需手动操作DOM
    * 跨平台：本质上是js对象

26. 虚拟DOM的实现原理

    