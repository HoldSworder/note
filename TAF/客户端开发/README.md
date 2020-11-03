# 客户端开发

## 1. 生成proxy

1. 获取jce文件
2. 在服务器生成proxy文件

    ```bash
    jce2node Hello.jce --client
    ```

3. 将生成的proxy文件保存到工作目录下

## 2. 调用

### 1. taf-request调用

```bash
npm install @up/taf-request -S
```

```js
import { config } from '@up/taf-conf'
import logger from '@up/taf-logger'
import { config } from '@up/taf-conf'
import DCache from '@up/taf-dcache-srf'

const request = {
  TgTipsProxy: Request.defaults({
    proxy: 'TgTipsProxy',
    jceProxy: [
      require('./jce/TgTipsProxy'),
      require('./jce/TgCommJce')
    ],
    timeout: 10000,
    servant: config.get('servant:TgTips')
  }),
}

export default function (options = {}) {
  logger.data.info(options);
  return request[options.proxy](options).then((rsp) => rsp[Object.keys(rsp)[0]].toObject());
}

export const userCache = DCache(config.get('dcache:user:servant'), config.get('dcache:user:module')).toPromise()
```

#### 使用方法

```js
import proxy from '../proxy'

async saveLive(req, res, next) {
    try {
      const data = await proxy({
        proxy: 'TgLiveProxy',
        interface: 'saveLive',
        req: 'LiveReq',
        data: {
          data: req.body,
        },
      });
      if (data.code !== 0) {
        throw new Error(data.message);
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

```

### 2. 中间件调用

基于taf-request封装

```bash
npm install @up/express-taf-request -S
```

```js
// /middlewares/taf.js
import Request from '@up/express-taf-request'
import { config } from '@up/taf-conf'

const middleware = Request.createMiddleware({
  TgUserProxy: {
    jceProxy: [
      require('../jce/TgCommJce'),  // 如果有include 就需要引入前置jce
      require('../jce/TgUserProxy'),
    ],
    servant: config.get('servant:TgUserProxy'),
  }
})

// 添加请求拦截器
middleware.interceptors.request = options => {
  options.data.basicInfo = {
    ...options.data.basicInfo,
    platform: 'h5',
  }
  options.timeout = 10000;
}

// 添加响应拦截器
middleware.interceptors.response = data => {
  if (data.code && data.code !== 0) {
    throw new Error(data.message);
  }
};

export default middleware
```

#### 调用

```js
import express from 'express';
import taf from '../middlewares/taf';

export default function() {
  const router = express.Router();

  router.get('/recommend', taf({
    proxy: 'TgUniversalProxy',
    interface: 'queryRecommend',
    req: 'QueryRecommendReq',
    data: (req) => req.query,
  }));
}
```

## 3. 设置servant

从taf平台获取相关服务的servant

```js
// /config/config.json
{
  "servant": {
    "HKOpenAccount": "HTHK.OpenAccountWebServer.OpenAccountWebServerObj@tcp -h 10.132.1.52 -t 60000 -p 10005"
  }
}
```
