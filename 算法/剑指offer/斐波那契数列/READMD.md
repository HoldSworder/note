# 斐波那契数列

斐波那契数列指的是类似于以下的数列：

[1, 1, 2, 3, 5, 8, 13, ...]

也就是，第 n 个数由数列的前两个相加而来：f(n) = f(n - 1) + f(n -2)

输入 n 输出数列中的第 n 项

```js
// 计算完整数列版
function fibonacci(n) {
  if(n == 0) return 0
  let arr = []  //完整数列
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      arr.push(1)
    } else {
      arr.push(arr[i - 1] + arr[i - 2])
    }
  }
  return arr[n - 1]
}

function fib(n) {
  if(n < 0) return 0
  if(n < 2) return n

  return fib(n - 1) + fib(n - 2)
}
```
