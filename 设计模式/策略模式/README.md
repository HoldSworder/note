# 策略模式

根据不同参数可以命中不同的策略

```js
const strategy = {
  S: function(salary) {
    return salary * 4
  },
  A: function(salary) {
    return salary * 3
  },
  B: function(salary) {
    return salary * 2
  }
}

const calculateBonus = function(level, salary) {
  return strategy[level](salary)
}
```

在函数是一等公民的 JS 中, 策略模式的使用常常隐藏在高阶函数中, 稍微变换下上述 demo 的形式如下, 可以发现我们平时已经在使用它了, 恭喜我们又掌握了一种设计模式。

```js
const S = function(salary) {
  return salary * 4
}

const A = function(salary) {
  return salary * 3
}

const B = function(salary) {
  return salary * 2
}

const calculateBonus = function(func, salary) {
  return func(salary)
}

calculateBonus(A, 10000) // 30000
```
