# 类型

## 1. 基本类型

string、number、boolean、null、undefined、sybool等

## 2. 函数类型

```ts
// 永远不会返回
function aa(): never {
  throw new Error()
  console.log('asdf')
}

// 没有返回值
function bb(): void {
  console.log('sadf')
}

// 对象参数类型
function cc({one}: {one: number}) {
  return one
}
```

## 3. 元组

```ts
const aa : [string, string, number] = ['11', '22', 22]
```

## 类型别名

```ts
type aa = {
  name: string,
  age: number
}

const bb : aa[]= [{
  name: 'bb',
  age: 18
}]
```
