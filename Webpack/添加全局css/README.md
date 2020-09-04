# 添加全局css

1. 下载loader

        yarn add -D Style Resources Loader

2. 修改webapck配置

```js
module: {
  rules: [
    {
      test: /\.(styl|stylus)$/,
      use: ['vue-style-loader', 'css-loader', 'stylus-loader', {
        loader: 'style-resources-loader',
        options: {
          patterns: path.join(__dirname, '../src/renderer/stylus/index.styl')
        }
      }]
    },
  ]
}
```
