下载egg-validate

配置插件

在controller中使用

```js
ctx.validate({
    name: 'string',
    password: 'string',
}, ctx.query)
```