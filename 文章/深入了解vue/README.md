# 深入了解Vue

## 目录结构

1. compiler： 编译相关
2. core：核心代码
3. platforms： 跨端、平台相关
4. server：服务端渲染SSR
5. sfc：解释器
6. shared：辅助方法

## Vue对象
在 **/core/instance/index** 中可以找到一个Vue的构造函数，不使用Class定义的原因是因为用构造函数能很方便的拆分原型中的方法

然后在下方利用几个引入的Mixin函数在Vue的原型上挂载了一些方法

在 **/core/global-api/** 中又给Vue挂载了一些静态方法

## 为什么能直接用this访问props、methods、data中的数据

在vue的 **init/initState**中可以发现，vue将data对象挂载到了vm._data中

然后在initData函数中遍历了methods、props避免命名重复，并且使用proxy函数中使用 *Object.defineProperty* 代理了vm._data

使得我们在访问this.xx的时候实际上是访问了this._data.xx

## new Vue的时候发生了什么

vue会将传入vue的参数转化为render对象

所以直接写render的时候会性能更高

然后会在 **initRender**中调用render函数里利用**createElement**方法获取vnode

    vnode = render.call(vm._renderProxy, vm.$createElement)

vnode通过patch方法转化为真实的DOM
