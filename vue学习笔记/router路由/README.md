跳转
---------
利用<router-link>标签进行跳转 可以使用v-for进行循环。。
或者利用tag属性指定 标签属性 默认为a标签
to指定路由地址
active-class属性指定激活标签时使用的class标签

<router-link v-for="item in xxx" tag="li" :to="{ path: item.path }" active-class="active"></router-link>

当前路由
------
使用this.$route.path可以取到当前路由地址

插入路由
----------
利用<router-view></router-view>插入路由

配置路由
--------
在路由文件的index.js或者入口文件中配置

跳转访问
-------
将某一路由页面指向另一页面
在index.js中配置
    path: '/detail'
    redirect: '/detail/analysis'