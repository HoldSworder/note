```js
function diff(arr1, arr2) {
  
    var newArr = [];
      for(var i = 0; i < arr2.length; i++) {
          if(arr1.indexOf(arr2[i]) == -1){
              newArr.push(arr2[i]);
          }
      }

  
      for(var i = 0; i < arr1.length; i++) {
          if(arr2.indexOf(arr1[i]) == -1){
              newArr.push(arr1[i]);
          }
      }
        return newArr;
    }

```