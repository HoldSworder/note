请求跨域数据时 有时会需要验证请求头

此时可以在 build/dev-server 中伪造

引入axios

在const app = express() 下配置

```js
  const apiRoutes = express.Router() 

  apiRoutes.get('/getDiscList', function (req, res) {
    var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

    axios.get(url, {    //利用axios的get方法 传入请求头
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e)
    })
  })

  app.use('/api', apiRoutes)
```