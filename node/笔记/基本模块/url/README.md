# url 模块

用来处理网址相关，主要用来获取地址路径和参数

```js
const url = require('url')

let site = 'http://www.xx.com/a/b/index.html?a=1&b=2'
let { pathname, query } = url.parse(site, true)

console.log(pathname, query)
// /a/b/index.html {a: '1', b: '2'}
```
