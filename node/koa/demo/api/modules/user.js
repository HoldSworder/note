const Router = require('koa-router')
const router = new Router()

router.get('/list', async (ctx, next) => {
  const data = ctx.query
  ctx.body = {
    code: 200,
    data: [{
      id: 1,
      name: '小明',
      age: 22,
      data
    }],
    msg: 'ok'
  }
})

router.post('/update', async (ctx, next) => {
  const data = ctx.request.body
  ctx.body = {
    code: 200,
    data,
    msg: 'ok'
  }
})

router.get('/user/:userId', async ctx => {
  const id = ctx.params.userId
  ctx.body = {
    id
  }
})

module.exports = router