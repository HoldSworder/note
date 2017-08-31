在js中 所有代码都是单线程执行的。

由于这个‘缺陷’，导致js的所有网络操作，浏览器事件，都必须异步执行。

例子

生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败：

    function test(resolve, reject) {
        var timeOut = Math.random() * 2;
        log('set timeout to: ' + timeOut + ' seconds.');
        setTimeout(function () {
            if (timeOut < 1) {
                log('call resolve()...');
                resolve('200 OK');
            }
            else {
                log('call reject()...');
                reject('timeout in ' + timeOut + ' seconds.');
            }
        }, timeOut * 1000);
    }

这个test()函数有两个参数，这两个参数都是函数，如果执行成功，我们将调用resolve('200 OK')，如果执行失败，我们将调用reject('timeout in ' + timeOut + ' seconds.')。可以看出，test()函数只关心自身的逻辑，并不关心具体的resolve和reject将如何处理结果。

有了执行函数，我们就可以用一个Promise对象来执行它，并在将来某个时刻获得成功或失败的结果：

    new Promise(test).then(function (result) {
        console.log('成功：' + result);
    }).catch(function (reason) {
        console.log('失败：' + reason);
    });