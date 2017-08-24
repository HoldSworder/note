异步的概念
-----
可以在任务等待(如等待读取文件)过程中处理其他任务

同步则需要等待任务完成后 才可执行下一步任务

回调函数的概念
-----

js语言对异步编程的实现 就是回调函数

所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数 英文名`callback`

读取文件的代码：

    fs.readFile('/etc/passwd', function (err, data) {
    if (err) throw err;
    console.log(data);
    });

Promise
------

回调函数本身并没有问题，他的问题出现在多个回调函数嵌套。
假设读取A文件之后，再读取B文件，代码如下

    fs.readFile(fileA, function (err, data) {
        fs.readFile(fileB, function (err, data) {
            // ...
        });
    });

不难想象，如果一次读取多个文件，就会出现多重嵌套。 代码会横向发展，无法管理。这种情况成为‘回调函数噩梦’`callback hell`

promise就是为了解决这个问题提出的，它不是新的语法功能，而是一种新的写法，允许将回调函数横向加载改为纵向加载。

采用`promise`，连续读取多个文件：

    var readFile = require('fs-readfile-promise');

    readFile(fileA)
    .then(function(data){
    console.log(data.toString());
    })
    .then(function(){
    return readFile(fileB);
    })
    .then(function(data){
    console.log(data.toString());
    })
    .catch(function(err) {
    console.log(err);
    });

上面代码中，我使用了 fs-readfile-promise 模块，它的作用就是返回一个 Promise 版本的 readFile 函数。Promise 提供 then 方法加载回调函数，catch方法捕捉执行过程中抛出的错误。

可以看到，Promise 的写法只是回调函数的改进，使用then方法以后，异步任务的两段执行看得更清楚了，除此以外，并无新意。

Promise 的最大问题是代码冗余，原来的任务被Promise 包装了一下，不管什么操作，一眼看去都是一堆 then，原来的语义变得很不清楚。

那么，有没有更好的写法呢？

协成
------
