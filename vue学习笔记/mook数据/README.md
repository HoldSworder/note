在dev-server文件中

var app = express() //在此行下

```js
  var appData = require('../data.json')  //获取json数据
  var seller = appData.seller;           //分别定义获取的数据
  var goods = appData.goods;
  var ratings = appData.ratings;

  var apiRoutes = express.Router();  //启用express框架的router路由

  apiRoutes.get('/seller', function (req, res) {
    res.json({
      errno: 0,      //状态码 0 代表成功
      data: seller    //获取的数据
    });
  });      

  app.use('/api', apiRoutes);        
```

即可通过 '/api/seller' 来获取数据