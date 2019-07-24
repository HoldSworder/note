# sleep
让代码挂起一段时间

```js
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

async function test() {
  await sleep(2000)
  console.log('11')
}
```