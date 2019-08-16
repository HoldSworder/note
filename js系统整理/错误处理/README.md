# throw try...catch...

throw 用于抛出异常

```js
throw 'error !'
throw 404
throw { msg: 'err' }
```

try...catch 用于捕获异常，try 后面是程序正常时候执行的程序，catch 后面是接受到错误时执行的代码，并捕获错误信息作为参数，并在 catch 执行完后，参数不可再用

```js
function fun() {
  throw 'test error!'
}

try {
  fun()
  console.log('success')
} catch (err) {
  console.log(err)
  console.log('failed')
}
// test error!
// failed
```

通常在 try...catch 后还有一个 finally 语句块，无论是否有错误抛出都会执行

```js
try {
  //do something
} catch (err) {
  //do something
} finally {
}
```
