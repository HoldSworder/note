```js
function slasher(arr, howMany){
    if(howMany > arr.length){
        return []
    }
    else{
        return arr.slice(howMany)
    }
}

function slasher(arr, howMany) {
  // 请把你的代码写在这里
  if(howMany>arr.length){
    return [];
  }
  else{
    arr.splice(0,howMany);
  }
  return arr;
}
```