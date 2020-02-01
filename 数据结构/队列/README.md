# 队列

队列跟栈一样 是一种特殊的线性表 在表的前端进行删除也叫队头 后端进行插入也叫队尾

```js
class Queue {
  constructor() {
    this.queue = []
  }

  //入队 向队尾添加元素
  enqueue(item) {
    this.queue.push(item)
  }

  //出队 从队头删除一个元素
  dequeue() {
    return this.queue.shift()
  }

  //查看队首元素
  front() {
    return this.queue[0]
  }

  //查看队尾元素
  back() {
    return this.queue[this.queue.length - 1]
  }

  //显示所有元素
  toString() {
    return this.queue.join('-')
  }

  //清空
  clear() {
    this.queue.length = 0
  }

  //判读是否为空
  empty() {
    if (this.queue.length) return true
    else return false
  }
}
```
