```js
function where(arr, num) {
    arr.sort(function (x, y) {
        if (x < y) {
            return -1;
        }
        else if (x > y) {
            return 1;
        }
        return 0;
    });
  
    
    for(var i = 0; i < arr.length; i++) {
      if(num <= arr[i]){
        return i;
      }
      
    }
  
    return arr.length
    
}
```