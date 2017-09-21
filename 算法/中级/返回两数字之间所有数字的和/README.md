```js
function sumAll(arr) {
  
    var max = Math.max(arr[0],arr[1]);
    var min = Math.min(arr[0],arr[1]);

    for(var i = 1; i < max - min; i++){
        arr.push(min + i);
    }

    return arr.reduce((a, b) => a + b);

}


```