```js
    var body = document.querySelector('body')
    body.addEventListener('click', (e) => {
      var x = e.clientX //x坐标
      var y = e.clientY //y坐标
      console.log(`${x} - ${y}`)
    })
```