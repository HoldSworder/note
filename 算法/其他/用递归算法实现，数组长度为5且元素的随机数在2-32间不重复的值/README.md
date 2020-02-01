# 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

```js
const max = 32, min = 2, length = 5
let arr = new Array(length)
function randomArr(n) {
  if(n == 0) return arr
  const num = Math.floor(Math.random() * (max - min + 1) - min)
  if(arr.includes(num)) return randomArr(n)
  arr[n - 1] = num
  return randomArr(n - 1)
}
randomArr(length)
```