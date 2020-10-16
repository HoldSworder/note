# 泛型

## 函数泛型

```ts
function join<aba>(first:aba, second:aba) {
  return `${first}${second}`
}

join<number>(1,2)
join<string>('11', '22')
```

* 函数中的数组

```ts
  function myFun<T>(params: T[]) {
    return params
  }

  function myFun<T>(params: Array<T>) {
    return params
  }

  myFun<string>(['123', '123'])
```

* 多个泛型

```ts
function myFun<T, P>(first:T, second:P) {
  return `${first}${second}`
}

myFun<string, number>('12', 12)
```

## 类泛型

```ts
class Aa<T> {
  constructor(nums: T[]) {}
  getNum(index: number): T {
    return this.number[index]
  }
}

const aa = new Aa<number>([11,22,33])
const aa = new Aa<string>(['11','22','33'])
```

* 类泛型继承

```ts
interface Num {
  name: string
}

class Aa<T extends Num> {
  constructor(nums: T[]) {}
  getNum(index: number): string {
    return this.number[index].name
  }
}

const aa = new Aa<number>([{
  name: '11'
}, {
  name: '22'
}])
```

## 泛型的约束

```ts
class Aa<T extends string | number> {
  constructor(nums: T[]) {}
  getNum(index: number): T {
    return this.number[index]
  }
}

const aa = new Aa<number>([11,22,33])
const aa = new Aa<string>(['11','22','33'])
```
