# 函数

```js
function aa(x:number, y:string): string {

}
```

## 重载

```js
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

输入为数字的时候，输出也为数字，输入为字符串的时候，输出也为字符串。