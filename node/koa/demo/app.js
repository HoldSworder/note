const Koa = require('koa') 
const app = new Koa()
const bodyParser = require('koa-bodyparser') //用于解析post请求的参数
const router = require('./api/index.js')


app.use(bodyParser())

// app.use(async ctx => {ctx.body = '服务启动'})
app.use(router.routes())
app.use(router.allowedMethods())

const appService = app.listen(3000, () => {
  console.log('listen 3000')
})

module.exports = appService