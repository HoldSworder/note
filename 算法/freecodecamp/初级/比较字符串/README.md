如果第一个字符串元素包含第二个字符串字符串所有字符，返回true

```js
function mutation(arr) {
  var a ;
    for(var i = 0; i < arr[1].length; i++) {
      a = arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase())
      if(a == -1){
        return false
      }
      
    }
   return true

function mutation(arr) {
  // 请把你的代码写在这里
  var a = arr[1].split('');
  var b = 0
  ;
  for(var i =0 ; i < a.length ; i++){
    b = arr[0].toLowerCase().indexOf(a[i].toLowerCase());
    if(b == -1){
      return false;
    }
  }
  return true;
  

 
 
}
```