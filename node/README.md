模块
--------
有三个预先定义好的变量

`require`
用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。

    var foo1 = require(./foo);



`module.exports`
用于导出当前模块的变量

    module.exports = function () {
        console.log('Hello World!');
    };

总结，利用module.exports设置当前模块暴露出去的api 利用require接受暴露出的api 

global全局对象
----------
js提供全局对象`window` node的全局对象叫`global`

可以利用判断全局对象变量名来判断是在node环境还是浏览器环境

process对象
---------
`process`也是node提供的一个对象，他代表当前node的进程

    > process === global.process;
    true
    > process.version;
    'v5.2.0'
    > process.platform;
    'darwin'
    > process.arch;
    'x64'
    > process.cwd(); //返回当前工作目录
    '/Users/michael'
    > process.chdir('/private/tmp'); // 切换当前工作目录
    undefined
    > process.cwd();
    '/private/tmp'

调用process.nextTice()可以令函数在下一次事件响应中调用 及将所有事件处理完成后

    // process.nextTick()将在下一轮事件循环中调用:
    process.nextTick(function () {
        console.log('nextTick callback!');
    });
    console.log('nextTick was set!');

    //打印输出
    nextTick was set!
    nextTick callback!