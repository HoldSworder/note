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

跨域问题
--------

上面代码url使用的相对路径。如果改为`http://www.sina.com.cn`肯定报错

这是因为浏览器的同源策略导致。默认情况下，js在发送AJAX  请求时，URL的域名必须和当前页面完全一致

完全一致的意思是，域名要相同（www.example.com和example.com不同），协议要相同（http和https不同），端口号要相同（默认是:80端口，它和:8080就不同）。有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。

##解决跨域的方法有

一、通过FLASH插件发送HTTP请求，这种方式可以绕过浏览器的安全限制，但不虚安装FLASH，并跟FLASH交互。现在用的越来越少

二、通过在同源域名下架设一个代理服务器来转发，js负责把请求发送到代理服务器：

    '/proxy?url=http://www.sina.com.cn'

代理服务器再把结果返回，这样就遵守了浏览器的同源策略，麻烦之处在于需要服务器端额外做开发

三、第三种方法称为JSONP，他有个限制，只能用GET请求，并且要求返回js。这种方式跨域实际上是利用了浏览器允许跨域引用js资源：

    <html>
    <head>
        <script src="http://example.com/abc.js"></script>
        ...
    </head>
    <body>
    ...
    </body>
    </html>

JSONP通常以函数调用的形式返回，例如返回js内容如下：

    foo('data');

这样一来，我们如果在页面中线准备好`foo()`函数，然后给页面动态加一个`<script>`节点，相当于动态读取外域的js资源，最后就等着接收回调了。


CORS
---------
H5的新跨域策略：CORS（跨域资源共享）

CORS全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。

它允许浏览器想跨源服务器，发出`XMLHttpRequest`请求，从而克服了AJAX只能同源使用的限制。

CORS需要浏览器和服务器的同时支持。目前所有浏览器都支持该功能

整个CORS通信过程，都是浏览器自动完成，不需要用户参与，对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加头信息

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信

##两种请求

浏览器将CORS请求分为两类：简单请求和非简单请求。

只要同时满足以下两大条件，就属于简单请求

    （1) 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
    （2）HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain


