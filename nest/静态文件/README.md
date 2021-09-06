# 配置静态文件目录

建立public目录在根目录下

```js
//main.js

import {NestExpressApplication} from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets('public')
  app.useStaticAssets('public', {
    prefix: '/static/'
  }) //配置虚拟目录
  
  await app.listen(3000)
}
```
