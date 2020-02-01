# 栈

栈是一个线性结构，特点是只能在某一端添加或删除数据，遵循先进后出的原则

```js
class stack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    this.stack.pop()
  }

  //查看栈顶元素
  peek() {
    return this.stack[this.stack.length - 1]
  }

  length() {
    return this.stack.lenght
  }

  clear() {
    return (this.stack.length = 0)
  }
}
```
