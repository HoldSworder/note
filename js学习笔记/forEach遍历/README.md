forEach方法是ES5中新增的数组方法

例子：

```js
[1,2,3,4].forEach(alert)

完全等同于

var array = [1,2,3,4]

for(var i = 0, i < arr.length; i++){
    alert(array[k]);
}
```

在forEach方法中的function回调函数支持3个参数，第一个是遍历的数组内容；第二个是对应数组的索引，第三个是数组本身

```js
[].forEach(function(value, index, array){
    //...
})
```

完整例子：

```js
var sum = 0;

[1,2,3,4].forEach(function(item, index, array) {
    console.log(array[index] == item); //true array的index索引即为值item
    sum += item;
})

alert(sum); //10
```

另外 除回调函数外 forEach 还接受一个参数 指向回调中的this

.forEach(callback, [ thisobject])

    var database = {
    users: ["张含韵", "江一燕", "李小璐"],
    sendEmail: function (user) {
        if (this.isValidUser(user)) {
        console.log("你好，" + user);
        } else {
        console.log("抱歉，"+ user +"，你不是本家人");	
        }
    },
    isValidUser: function (user) {
        return /^张/.test(user);
    }
    };

    // 给每个人法邮件
    database.users.forEach(  // database.users中人遍历
    database.sendEmail,    // 发送邮件
    database               // 使用database代替上面标红的this
    );

    // 结果：
    // 你好，张含韵
    // 抱歉，江一燕，你不是本家人
    // 抱歉，李小璐，你不是本家