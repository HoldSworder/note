```js
function titleCase(str) {
    var a = str.split(' ');
    var b = [];
    for(i = 0; i < a.length; i++){
        b.push(a[i].slice(0,1).toUpperCase()+a[i].slice(1).toLowerCase());    
    } 
    return b.join(' ');
}
```