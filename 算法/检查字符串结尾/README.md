判断str是否以target结尾
```js
function confirmEnding(str, target) {
 
  if(str.substr(-target.length)==target){
    return true;
  }
  else{
    return false;
  }
  
}





```