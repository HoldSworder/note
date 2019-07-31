const Router = require('koa-router')
const userRouter = require('./modules/user')
const router = new Router()

router.use('/api', userRouter.routes(), userRouter.allowedMethods())

module.exports = router