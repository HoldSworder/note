把数组arr按指定大小size分割成若干块

```js
function chunk(arr, size) {
   var myArr=[];
   for (i=0;i<arr.length;i+=size){
       myArr.push(arr.slice(i,size+i));
   }
  return myArr;

}

function chunk(arr, size) {
  // 请把你的代码写在这里
  var a = parseInt(arr.length/size);
  var b = [];
  for(var i =0 ; i < a ; i ++){
    
    b.push(arr.slice(size*i,(i+1)*size));
    
  }
  if(a==arr.length/size){
        return b;
    }
    else{
      b.push(arr.slice(-arr.length%size));
      return b;
    }
}
```