在终端中下载vue-resource

    cnpm install vue-resource --save

在main.js入口文件中引入

    import VueResource from 'vue-resource'

并使用

    Vue.use(VueResource)

引入完毕后即可在所有页面中使用

语法
---------
在export default中

``javascript
    created: function() {   //created是指的生命周期中vue实例被生成后调用此函数
        this.$http.get('xxxxxxxx').then(function(data){},function(err){})
    }
``

