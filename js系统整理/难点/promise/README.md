# Promise

## 使用案例

```js
//jq
new Promise((resolve, reject) => {
  $.ajax({
    url: 'xxx',
    data: {},
    type: 'post',
    success(res) {
      resolve(res)
    },
    error(err) {
      reject(err)
    }
  })
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```
