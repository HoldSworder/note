# 深拷贝

1. 浅拷贝
```js
function copy(target) {
  let copyObj = {}

  for(const key in target) {
    copyObj[key] = target[key]
  }

  return copyObj
}
```

2. JSON

缺点是无法拷贝null、undefined、引用类型
```js
function deepCopy(target) {
  return JSON.parse(JSON.stringify(target))
}
```

3. 递归

```js
function deepCopy(target) {
  if(typeof target === 'object') {
    let copyTarget = {}
    
    for(const key in target) {
      copyTarget[key] = deepCopy(target[key])
    }
    return copyTarget
  }else {
    return target
  }
}
```

4. 考虑数组

```js
function deepCopy(target) {
  if(typeof target === 'object') {
    let copyTarget = Array.isArray(target) ? [] : {}
    
    for(const key in target) {
      copyTarget[key] = deepCopy(target[key])
    }
    return copyTarget
  }else {
    return target
  }
}
```