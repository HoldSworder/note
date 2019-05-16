# 如何区分生产和开发环境

```js
//package.json
"dev": "webpack-dev-server --mode development",
"build": "webpack --mode production"

//js
if(process.env.NODE_ENV == 'production') {
  //生产环境
}else if(process.env.NODE_ENV == 'development') {
  //开发环境
}
```
