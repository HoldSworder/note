```js
function bouncer(arr) {
    arr.filter(x => x)
}

or

function bouncer(arr) {
    arr.filter( Boolean )
}

or

function bouncer(arr) {
  // 请把你的代码写在这里
  
  return arr.filter( function( value ){
     return value;
 });
  
  

}
```