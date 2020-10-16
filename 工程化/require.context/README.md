# require.context

webpack 提供的require.context方法 接收4个参数

require.context(url, recursive, reg, mode)

1. url 路径 '@/view
2. recursive 是否递归子文件夹 false
3. reg 正则过滤 /\.vue$/
4. mode 模式
    * sync 直接打包到当前文件，同步加载并执行
    * lazy 延迟加载会分离出单独的 chunk 文件
    * lazy-once 延迟加载会分离出单独的 chunk 文件，加载过下次再加载直接读取内存里的代码。
    * eager 不会分离出单独的 chunk 文件，但是会返回 promise，只有调用了 promise 才会执行代码，可以理解为先加载了代码，但是我们可以控制延迟执行这部分代码。

## vue中按需加载全局组件

```js
import Vue from 'vue'

const files = require.context('@/components/common', false, /\.vue$/, 'lazy')

files.keys().forEach(fileName => {
  const componentname = fileName.replace(/(\.\/|\.vue)/g, '')
  Vue.component('common-' + componentname, () => files(fileName).default || files(fileName)) // 引入写法需要这样写
})
```
