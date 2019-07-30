# koa 最佳实践

## 导入

```js
//cnpm i koa -S
//app.js

const koa = require('koa')
const app = new koa()

const appService = app.listen(3000, () => {
  console.log('listen 3000')
})

module.exports = appService
```

## 路由

```js
// cnpm i koa-router -S 安装路由库
// cnpm i koa-bodyparser -S 安装解析post数据
```

```js
//app.js
const bodyParser = require('koa-bodyparser')
const router = require('./api')

//挂载路由前先挂载解析库
app.use(bodyParser())

//挂载路由
app.use(async ctx => (ctx.body = '服务启动'))
app.use(router.router())
app.use(router.allowedMethods())
```

```js
//./api/index.js
const Router = require('koa-router')

const xxRouter = require('./modules/xx')

const router = new Router()

//所有注册路由添加前缀/api
router.use('/api', xxRouter.routes(), xxRouter.allowedMethods())

module.exports = router
```

```js
//./api/modules/
const Router = require('koa-router')
const router = new Router()

//注册get方法
router.get('/list', (ctx, next) => {
  const data = ctx.query
  ctx.body = {
    code: 200,
    data: [
      {
        id: 1,
        name: '小明',
        age: 22
      }
    ],
    msg: 'ok'
  }
})

//注册post方法
router.post('/update', (ctx, next) => {
  const data = ctx.request.body
  ctx.body = {
    code: 200,
    data,
    message: 'ok'
  }
})

module.exports = router
```

## rustful
```js
router.get('/user/:userId', async ctx => {
  const id = ctx.params.userId
  ... ...
})
```