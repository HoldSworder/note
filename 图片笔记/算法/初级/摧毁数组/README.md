```js

function destroyer(arr) {
    for(var i = 1; i < arguments.length; i++) {
         arr = arr.filter(x => x !== arguments[i])
        
    }
   
    return arr 
}



function destroyer(arr) {
  
  var a = arguments.length;
  
  for(var x = 0; x < a; x++){
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] == arguments[x+1]){
          arr.splice(i,1);
        }
    }
  }
  
  
  
  
}

```