# 数组去重

## es6

最简单的方法是使用set
```js
let arr = [1,2,3,4,1,2]

Array.from(new Set(arr))
```

## filter
```js
function unique(array) {
  let res = array.filter(function(item, index, array) => {
    return array.indexOf(item) === index
  })
}
```