# controller

## 命令行生成

nest g controller xxx

## 获取参数

@Query get参数

@Param 动态路由:id

@Body post参数

## 重定向

@Response() res

res.redirect('/user')

## 状态码

@HttpCode(204)

## 监听response

```js
@Get
index(@Response() res) {
  res.cookie('xxx', 'xxxxxxx')

  // return 'xxx' 不能直接return
  res.send('return项目')
}
```
