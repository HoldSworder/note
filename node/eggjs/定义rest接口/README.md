# 定义rest接口

在app/router文件中

```js
const { controller, router } = app

router.resources('topics', '/api/v2/topics', controller.topics)
```

![rest](./rest.png)

参数为 1.路由名称  2.路由路径  3.相关controller

一行即可注册7个方法
