```js
function repeat(str,num) {
    var a = '' ;
    if(num < 0){
        return '';
    }else{
        for(i = 0; i < num; i++){
            a += str;
        }
        return a;
    }
}

function repeat(str, num) {
  // 请把你的代码写在这里
  var a = "";
  if(num >= 0){
    for(var i=0;i<num;i++){
      a = a + str;

    }
  }
  else{
    return '';
  }
  return a;
  
}

```