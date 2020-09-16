# 引入全局变量

## 1. vue-cli

```cmd
vue add style-resources-loader
```

```js
//vue.config.js
const path = require('path')

module.exports = {
 pluginOptions: {
  'style-resources-loader': {
   preProcessor: 'stylus',
   patterns: [path.resolve(__dirname, './src/stylus/index.styl')],
  },
 },
}
```

## 2. 普通 webpack 环境

```cmd
yarn add -D style-resources-loader
```

```js
rules: {
  {
    test: /\.(styl|stylus)$/,
    use: ['vue-style-loader', 'css-loader', 'stylus-loader', {
      loader: 'style-resources-loader',
      options: {
        patterns: path.join(__dirname, '../src/renderer/stylus/index.styl')
      }
    }]
  },
}
```
