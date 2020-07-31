简单说 就是将所有需要后台进行传递的数据归集到一起便于管理

store设置见demo store位置应处于src文件夹下

调用方法
-------
在生命周期mounted中进行ajax函数调用

  mounted () {
    this.$store.dispatch('fetchOrderList')
  },

this.$store.dispatch('xxx')调用在store中预设的ajax函数

在计算属性中进行赋值

  computed: {
    xxxData() {
      return this.$store.getters.getOrderList
    }
  }

利用this.$store.getters.xxx进行调用赋值给xxxData

引入方法
----------
多页面在引入script标签后

  const store = new Vuex.Store({
    state:{
      count:0   //在任何组件都可以取到 需要定义computed
    }
  });

  new Vue({
    el: xxx,
    store,
    data:{}
  })

定义computed
----------
在引入vuex后 在组件定义

  computed:{
    count(){
      return this.$store.state.count;
    }
  }

改变state的值
------
在vuex实例中定义mutations

  mutations:{
    increment(state) {
      state.count++;
    }
  }

调用
---------
在外部函数中

methods: {
  add() {
    this.$store.commit('increment')
  }
}

异步提交函数
---------

定义

  actions:{
    incrementAction(context) {
      context.commit('increment',num);
    }
  }

处理state中的数据
--------------
在getters中进行处理

调用时调用getters中的方法

`详情见demo1`