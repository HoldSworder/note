在build/dev-server.js中配置

位于 const app = express() 下

    //mock假数据配置
    var router = express.Router();
    var goodsData = require('./../mock/goods.json'); //此为json地址
    router.get("/goods",function (req,res,next) {
    res.json(goodsData)
    })
    app.use(router);
    //end