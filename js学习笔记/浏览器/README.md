浏览器对象
======

window
-----

`window`对象不但充当全局作用域，而且表示浏览器窗口。

`window`对象有`innerWidth`和`innerHeight`属性，用来获取浏览器窗口的内部宽度和高度。

内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。

对应的还有一个`outerWidth`和`outerHeight`属性，可以获取浏览器窗口的整个宽高

navigator
------

`navigator`对象表示浏览器的信息，最常用的属性包括：

* navigator.appName: 浏览器名称；
* navigator.appVersion: 浏览器版本；
* navigator.language: 浏览器设置的语言；
* navigator.platform: 操作系统类型；
* navigator.userAgent: 浏览器设置的`User-Agent`字符串。

screen
------

`screen`对象表示屏幕的信息，常用的属性有：

* screen.width: 屏幕宽度，以像素为单位；
* screen.height: 屏幕高度，以像素为单位；
* screen.colorDepth：返回颜色位数，如8、16、24。

location
-----

`location`对象表示当前页面的URL信息。例如，一个完整的URL：

    http://www.example.com:8080/path/index.html?a=1&b=2#TOP

可以用`location.href`获取。要获得URL各个部分的值：

    location.protocol; // 'http'
    location.host; // 'www.example.com'
    location.port; // '8080'
    location.pathname; // '/path/index.html'
    location.search; // '?a=1&b=2'
    location.hash; // 'TOP'

要加载一个新页面，可以调用`location.assign()`。

要重新加载当前页面，可以调用`location.reload()`。

document
---------

`document`对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构`document`对象就是整个DOM树的根节点。

`document`的`title`属性是从HTML文档中的`<title>xxx</title>`读取的，但是可以改变

    document.title = 'xxx';

`document`对象还有一个`cookie`属性，可以获取当前页面的Cookie。

JavaScript可以通过`document.cookie`读取到当前页面的Cookie：

    document.cookie; // 'v=123; remember=true; prefer=zh'

为了解决安全隐患 可以在服务器端使用`httpOnly` 设定了`httpOnly`的Cookie将不能被js读取。

history
-----

`history`对象保存了浏览器的历史记录，js可以调用`history`对象的`back()`或`forward()`，相当于用户点击了浏览器的“后退”或者“前进”按钮。

现在不推荐使用`history`对象

AJAX会使得信息得不到传递