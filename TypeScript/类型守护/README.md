# 类型守护

## 类型断言

```ts
interface Waiter {
  anjiao: boolean;
  say() {}
}

interface Teacher {
  anjiao: boolean;
  skill() {}
}

function judgeWho(animal: Waiter | Teacher) {
  if(animal.anjiao) {
    (animal as Waiter).say()
  }else {
    (animal as Teacher).skill()
  }
}
```

## in

```ts
if('skill' in animal) {
  animal.skill()
}else {
  animal.say()
}
```
