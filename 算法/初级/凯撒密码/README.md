位移13位

```js

function rot13(str) {
    str = str.split('')
    for(var i = 0; i < str.length; i++){
      
      var a = str[i].charCodeAt()
      
      if(a >= 65 && a <= 90){
        if( a >= 78) {
          str[i] = String.fromCharCode(a - 13)
        }else {
          str[i] = String.fromCharCode(a + 13)
        }
      }
    }
    
    return str.join('')
    
}

```