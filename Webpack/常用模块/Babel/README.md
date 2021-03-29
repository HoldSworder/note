# Babel

使用babel转义新语法 兼容到老版本浏览器

```shell
npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-env @babel/plugin-proposal-class-properties
```

```js
//webpack.config.js

module.exports = {
  /* ... */

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}
```
