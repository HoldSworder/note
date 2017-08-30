获取值
-----

如果我们获得了一个`<input>`节点的引用，就可以直接调用`value`获得对应的用户输入值

    // <input type="text" id="email">
    var input = document.getElementById('email');
    input.value; // '用户输入的值'

适用于所有输入信息的表单

但对于单选框和复选框，`value`属性返回的永远是HTML预设的值，而我们需要获得的是用户是否打勾的选项，所以用`checked`判断

    // <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
    // <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
    var mon = document.getElementById('monday');
    var tue = document.getElementById('tuesday');
    mon.value; // '1'
    tue.value; // '2'
    mon.checked; // true或者false
    tue.checked; // true或者false

设置值
------

设置值和获取类似

直接设置`value`

    // <input type="text" id="email">
    var input = document.getElementById('email');
    input.value = 'test@example.com'; // 文本框的内容已更新

单选和复选 设置`checked`为`true`或`false`

H5控件
--------

新增常用的包括`date``datetime``color`等 均为`<input>`标签：

    <input type="date" value="2015-07-01">


提交表单
---------

js可以用两种方式处理表单的提交

一是通过`<form>`元素的`submit()`方法提交，例如，响应一个`<button>`的`click`事件，在js中提交：

    <!-- HTML -->
    <form id="test-form">
        <input type="text" name="test">
        <button type="button" onclick="doSubmitForm()">Submit</button>
    </form>

    <script>
    function doSubmitForm() {
        var form = document.getElementById('test-form');
        // 可以在此修改form的input...
        // 提交form:
        form.submit();
    }
    </script>

这种方式的缺点是扰乱了浏览器对form的正常提交。浏览器默认点击`<button type="submit">`时提交表单，或者用户在最后一个输入框按回车键。

因此，第二种方式是响应`<form>`本身的onsubmit事件，在提交form时作修改：

    <!-- HTML -->
    <form id="test-form" onsubmit="return checkForm()">
        <input type="text" name="test">
        <button type="submit">Submit</button>
    </form>

    <script>
    function checkForm() {
        var form = document.getElementById('test-form');
        // 可以在此修改form的input...
        // 继续下一步:
        return true;
    }
    </script>

`return true`来告诉浏览器继续提交，如果`return false`就不会继续提交

没有`name`属性的`<input>`是不会被提交的。
