定义
--------

当我们在一个js文件中需要使用另一个js文件返回的数据时

例如：

现在有`index.js`和`content.js`两个文件，要想在`index.js`中使用`content.js`返回的结果

es6中 

    //index.js
    import animal from './content/'

    //content.js
    export default 'A cat'

可以利用 * as 调用

    export * as a from 'xxx'

    然后利用 a.xxx 调用暴露出的方法