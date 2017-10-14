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

