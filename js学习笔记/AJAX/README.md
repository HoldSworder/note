Asynchronous JavaScript and XML 的缩写即为 AJAX

意思就是用js执行异步网络请求

web的运作原理：一次HTTP请求对应一个页面 所以在form每次提交都会刷新页面

如果要让用户留在当前页面中，同时发出新的HTTP请求，就必须用JavaScript发送这个新请求，接收到数据后，再用JavaScript更新页面，这样一来，用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。

AJAX是异步执行的请求 所以要通过回调函数获得响应。

主要依靠`XMLHttpRequest`对象：

    function success(text) {
        var textarea = document.getElementById('test-response-text');
        textarea.value = text;
    }

    function fail(code) {
        var textarea = document.getElementById('test-response-text');
        textarea.value = 'Error code: ' + code;
    }

    var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

    request.onreadystatechange = function () { // 状态发生变化时，函数被回调
        if (request.readyState === 4) { // 成功完成
            // 判断响应结果:
            if (request.status === 200) {
                // 成功，通过responseText拿到响应的文本:
                return success(request.responseText);
            } else {
                // 失败，根据响应码判断失败原因:
                return fail(request.status);
            }
        } else {
            // HTTP请求还在继续...
        }
    }

    // 发送请求:
    request.open('GET', '/api/categories');
    request.send();

    alert('请求已发送，请等待响应...');

在创建了`XMLHttpRequest`对象后，要先设置`onreadystatechange`的回调函数。在回调函数中，通常我们只需通过`readyState === 4`判断请求是否完成，如果已完成，再根据`status === 200`判断是否是一个成功的响应。

`XMLHttpRequest`对象的`open()`方法有3个参数，第一个参数是制定`get`或者`post`，第二个参数制定URL地址，第三个制定是否使用异步，默认是`true`，所以不用写。

最后调用`send()`方法才真正发送请求。`GET`请求不需要参数，`POST`请求需要把body部分以字符串或者`formData`对象传进去。

