# 复杂度分析

1. 数据结构和算法解决的是 **如何让计算机更快时间、更省空间的解决问题**
2. 复杂度描述的是算法执行时间（或占用空间）与数据规模的增长关系

## 大 O 表示法

算法的执行时间与每行代码的执行次数成正比，用 T(n) = O(f(n))表示，其中 T(n)表示算法执行总时间，f(n)表示每行代码执行总次数，而 n 往往表示数据的规模。这就是大 O 时间复杂度表示法。

## 时间复杂度

算法的时间复杂度，也就是算法的时间量度

```js
function fun() {
  console.log('adf')
  return 0
}
//复杂度为O(1)
```

```js
function fun(n) {
  for (let i = 0; i < n; i++) {
    console.log('asdf')
  }
  return 0
}
//复杂度为O(n)
```

```js
function fun(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log('adf')
    }
  }
  return 0
}
//复杂度为O(n²)
```

以时间复杂度为例，由于时间复杂度描述的是算法执行时间与数据规模的增长变化趋势，所以常量、低阶、系数实际上不产生影响，所以一般忽略这些项

## 时间复杂度分析

1. 只关注循环执行次数最多的一段代码

单端代码看高频：比如循环

```js
function fun(n) {
  for (let i = 0; i < n; i++) {
    console.log('asdf')
  }
  return 0
}
//执行次数最多的是for循环及里面的代码，执行了n次
//所以时间复杂度为O(n)
```

2. 加法法则：总复杂度等于量级最大的那段代码的复杂度

多段代码取最大：比如一段代码有单循环和多重循环，那么取多重循环的复杂度

3. 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积

嵌套代码求乘积：比如递归、多重循环等

```js
function cal(n) {
  for (let i = 0; i < n; i++) {
    console.log('')
  }
}

function fun(n) {
  let sum
  for (let i = 0; i < n; i++) {
    sum = sum + cal(i)
  }
  return sum
}

//fun函数的循环中调用cal 而cal中也有循环
//所以时间复杂度为： T(n) = T1(n)*T2(n) = O(n*n) = O(n²)
```

4. 多个规模求加法

比如有两个参数控制两个循环的次数，那么此时就取二者相加

```js
function cal(m, n) {
  let sum_1 = 0
  let i = 1
  for (; i < m; ++i) {
    sum_1 = sum_1 + i
  }

  let sum_2 = 0
  let j = 1
  for (; j < n; ++j) {
    sum_2 = sum_2 + j
  }

  return sum_1 + sum_2
}

//时间复杂度为O(m+n)
```

5. 多个规模求乘法
```js
function cal(m, n) {
  let sum_3 = 0;
   let i = 1;
   let j = 1;
   for (; i <= m; ++i) {
     j = 1; 
     for (; j <= n; ++j) {
       sum_3 = sum_3 +  i * j;
     }
   }
}
// 时间复杂度为O(m*n)
```

## 空间复杂度
```js
let arr = []
arr.length = n
for(let i = 0; i < 0; i++) {
  arr[i] = i * i
}

//arr是一个数组占用了长度为n的空间 除此之外没有占用更多的空间，所以时间复杂度是O(n)
```