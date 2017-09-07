```js
function factorialize(num) {
    var a = 1;
    for(var i = num; i > 0; i--) {
        a *= i;
    }
    return a;
}
```