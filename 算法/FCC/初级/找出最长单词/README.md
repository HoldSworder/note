找出最长单词 并返回他的长度

```js
function findLongestWord(str) {
    var a = str.split(' ');
    var max = 0;
    for(i = 0; i < a.length; i++){
        if(a[i].length > max){
            max = a[i].length
        }
    }
    return max;
}
```