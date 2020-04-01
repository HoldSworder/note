# 限制并发数的Promise

如果同时并发很多Promise会导致爆栈

所以我们需要限制同时并发Promise的数量以打到最高的效率

```js
class PromiseLimit{
  constructor(max, fn) {
    this.max = max  //最大并发数
    this.fn = fn  
    this.pool = []  //并发池
    this.arrs  //剩余数
  }

  start(arrs) {
    this.arrs = [...arrs]
    while(this.pool < this.max) {
      const item = this.arrs.shift()
      this.setTask(item)
    }
    const race = Promise.race(this.pool)
    return this.run(race)
  }

  run(race) {
    race.then(res => {
      const item = this.arrs.shift()
      this.setTask(item)
      this.run(Promise.race(this.pool))
    })
  }

  setTask(item) {
    if(!item) return
    const promise = this.fn(item)
    this.pool.push(promise)

    promise.then(res => {
      this.pool.splice(this.pool.indexOf(promise), 1)
    })
  }
}
```