# vue中使用TS模块问题

使用vue时常常会将一些方法挂在到vue的原型上以便于全局调用

```js
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios

//
this.$axios.post()
```

但是在接入TS之后 TS的类型检查会找不到新挂载的方法

需要我们在**shims-vue.d.ts**文件中声明

```js
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  import Vue from 'vue'
  interface Vue {
    $axios: any
    $util: any
    $api: any
  }
}
```