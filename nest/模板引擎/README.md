# 模板引擎

建立views文件夹于根目录

```js
//main.js

import {NestExpressApplication} from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // 安装ejs yarn add ejs
  app.setBaseViewsDir('views')
  app.setViewEngine('ejs')

  await app.listen(3000)
}
```

## 使用

在controller中

```js
@Get
@Render('index.ejs')
index() {
  return {name: '123'}
}
```
