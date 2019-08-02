# 拍平数组

## ES6 flat

```js
let arr = [1, [2, [3, 4]]]
arr.flat(Infinity)
```

## 递归

```js
let arr = [1, [2, [3, 4]]]

function flat(arr) {
  let newArr = []
  for (const item of arr) {
    Array.isArray(item)
      ? (newArr = [...newArr, ...flat(item)])
      : newArr.push(item)
  }
  return newArr
}
```

## reduce

```js
let arr = [1, [2, [3, 4]]]

function flat(arr) {
  return arr.reduce((prev, next) => {
    let a = Array.isArray(next) ? flat(next) : [next]
    return (prev = [...prev, ...a])
  }, [])
}
```
