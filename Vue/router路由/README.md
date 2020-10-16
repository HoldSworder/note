# router路由

## 跳转

利用[router-link]标签进行跳转 可以使用 v-for 进行循环。。
或者利用 tag 属性指定 标签属性 默认为 a 标签
to 指定路由地址
active-class 属性指定激活标签时使用的 class 标签

    <router-link v-for="item in xxx" tag="li" :to="{ path: item.path }" active-class="active"></router-link>

## 当前路由

使用 this.\$route.path 可以取到当前路由地址

## 插入路由

利用[router-view]标签插入路由

## 配置路由

在路由文件的 index.js 或者入口文件中配置

## 跳转访问

将某一路由页面指向另一页面
在 index.js 中配置
path: '/detail'
redirect: '/detail/analysis'

## 利用事件跳转

this.\$route.push({path: '/xxx'})

## 动态路由

在 to 中设置 :to={name:'cart',params:{cartId:123}}

路由配置中 path: '/cart/:cartId'

即可设置路由参数 cartId

## 命名视图 //可用其他形式 很少使用

在 vue 文件中使用多个 router-view

    <router-view name='title'>

需要在配置中定义
components: {
default: xxx, //默认
title: xxx, //当 name 为 title 时用哪个路由
。。。
}

## 默认路径

配置
{
path: '/',
redirect: '/需要默认选中的路径'
}
