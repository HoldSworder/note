HTTP协议的特点
-===========
简单快速、灵活、无连接、无状态

1、简单快速 每个资源的uii（统一资源符）是固定的

2、灵活 可以传输不同数据类型

3、每链接一次都会自动断掉

4、客户端 服务端两种身份 不记住状态 通过http无法记住状态

HTTP报文
====================
分为请求报文、响应报文

请求报文：请求行、请求头、空行、请求体 组成
响应报文：响应行、响应头、空行、响应体 组成

HTTP方法
================
GET 获取资源
POST 传输资源
PUT 更新资源
DELETE 删除资源
HEAD 获得报文首部

HTTP持久连接
=============
可以设置Keep-Alive模式 让HTTP进行持久链接 避免重新建立链接

1.1版本支持
