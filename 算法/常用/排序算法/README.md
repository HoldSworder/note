# 排序算法

1. 冒泡排序
原理： 将数组进行循环 每次循环两两对比 将较大的向后排 所以每次循环最后一位将会是最大的 此时再排除最后一位进行下一轮循环

```js
function sort(arr) {
  const len = arr.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = 0; j < len - i - 1; j++) {  //排除最后已经确定的元素进行循环
      if(arr[j + 1] < arr[j]) {
        let copy = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = copy
      }
    }
  }
  return arr
}
```

2. 选择排序
原理：从第一位开始循环 找到当前元素与之后所有元素中最小位进行交换 所以每次循环第一位是最小的

```js
function sort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    let copy = arr[i]
    arr[i] = arr[min]
    arr[min] = copy
  }
}
```

3. 快速排序
原理： 随便选择一个基数 按照顺序将数组分为小于基数和大于基数两个子集 对子集重复以上步骤 直到所有子集只剩一个元素为止 

```js
function sort(arr) {
  if(arr.length <= 1) return arr

  let median = Math.floor(arr.length / 2),
      pivot = arr.splice(median, 1)[0],
      left = [],
      right = []

  arr.map(x => {
    if(x > median) right.push(x)
    else left.push(x)
  })

  return [...quickSort(left), ...[pivot], ...quickSort(right)]
}
```