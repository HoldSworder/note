# postcss-pxtorem + lib-flexible

* postcss-pxtorem: 自动转化px为rem
* lib-flexible: 自动更改根font-size

```cmd
yarn add amfe-flexible
yarn add postcss-pxtorem --dev
```

```js
//main.js
import 'amfe-flexible'
```

```js
//.postcssrc.js
module.exports = {
 plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
  'postcss-pxtorem': {
   rootValue: 37.5, // 根据设计图尺寸写，设计图是375，就写37.5
   propList: ['*'], // 需要被转换的属性
   selectorBlackList: [], // 不进行px转换的选择器
  },
 },
}
```
