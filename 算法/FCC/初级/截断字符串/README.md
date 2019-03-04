如果字符串长度大于num，则把多余部分用...表示

...也计入字符串

```js
function truncate(str, num) {
    if(num <= 3) {
        return str.slice(0,num) + '...'
    }
    else if(str.length > num){
        return str.slice(0, num - 3) + '...'
    }
    if(num <= 3) {
        return str + '...'
    }
    else {
        return str
    }
}

function truncate(str, num) {
  // 请把你的代码写在这里
  if(str.length<=num){
    return str;
  }
  else{
    if(num<=3){
    return str.slice(0,num) + "...";
  }
  else{
    return str.slice(0,num-3) + "...";
  }
  }
  

}
```