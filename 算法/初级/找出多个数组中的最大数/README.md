```js
function largestOfFour(arr){
    var a = [];

    for(var i = 0; i < arr.length; i++) {
        var max = 0;
        for(var v = 0; v < arr[i].length; v++) {
            if(arr[i][v] > max) {
                max = arr[i][v]
            }
        
        }
        a.push(max);
    }
    return a;
}

function largestOfFour(arr) {
  // 请把你的代码写在这里
  var a = [];
  
  for(var i = 0; i < arr.length; i++){
    var max = 0;
    for(var s= 0 ; s < arr[i].length ; s++){
      
      if(max<arr[i][s]){
        max = arr[i][s];
      }
      
    }
    a.push(max);
  }
  return a;
}

```