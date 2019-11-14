# 参数验证

下载 egg-validate

配置插件

在 controller 中使用

```js
ctx.validate(
  {
    name: 'string',
    password: 'string'
  },
  ctx.query
)
```
