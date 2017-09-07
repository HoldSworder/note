回文就是忽略标点大小写 正反读都一样

```js
function palindrome(str) {

  var a = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  var b = str.toLowerCase().replace(/[^a-z0-9]/g,'').split('').reverse().join('');
  if( a == b ){
    return true;
  }
  else{
    return false;
  }
}
```