# 冒泡排序
原理： 将数组进行循环 每次循环两两对比 将较大的向后排 所以每次循环最后一位将会是最大的 此时再排除最后一位进行下一轮循环

```js
function sort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {  //排除最后已经确定的元素进行循环
      if(arr[j+1] > arr[j]) {
        let copy = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = copy
      }
    }
  }
  return arr
}
```

# 快速排序
原理： 随便选择一个基数 按照顺序将数组分为小于基数和大于基数两个子集 对子集重复以上步骤 直到所有子集只剩一个元素为止 

```js
function quickSort(arr) {
  if(arr.length <= 1) return arr

  let pivotIndex = Math.floor(arr.length / 2),
      pivot = arr.splice(pivotIndex, 1)[0], // 删除并返回中位数
      left = [],
      right = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), ...[pivot], ...quickSort(right)]
}
```