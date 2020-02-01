# 数组去重

## es6

最简单的方法是使用 set

```js
let arr = [1, 2, 3, 4, 1, 2]

Array.from(new Set(arr))
```

## indexOf/includes

```js
//arr.includes(arr[i])

function unique(arr) {
  let array = []
  for (const i of arr) {
    if (arr.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }

  return array
}
```

## hasOwnProperty

```js
function unique(arr) {
  const obj = {}
  return arr.filter((item, index, arr) => {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true)
  })
}
```

## filter

```js
function unique(array) {
  let res = array.filter(function(item, index, array) => {
    return array.indexOf(item) === index
  })
}
```

## 两次 for 循环

```js
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
}
```
