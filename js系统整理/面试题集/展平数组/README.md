# 多维数组的展平

ary = [1, [2, [3, [4, 5]]], 6]

1. flat

```js
ary.flat(Infinity);
```

2. 递归

```js
let arr = [];
function flat(array) {
  for (const item of ary) {
    if (Array.isArray(item)) {
      flat(item);
    } else {
      arr.push(item);
    }
  }
}
```

3. reduce

```js
function flat(arr) {
  return arr.reduce((total, item) => {
    return total.concat(Array.isArray(item) ? flat(item) : item);
  }, []);
}
```

4. while

```js
//只要有一个元素有数组，那么循环继续
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}
```
