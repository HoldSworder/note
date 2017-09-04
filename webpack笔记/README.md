导出
-------
通过命令行工具进行打包
------

    # {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
    # {destination for bundled file}处填写打包文件的存放路径
    # 填写路径的时候不用添加{}
    webpack {entry file} {destination for bundled file}


通过`webpack.config.js`配置文件进行打包
-------------

在根目录下新建一个名为`webpack.config.js`文件

    module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    }
    }

##注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

有了这个配置之后，再打包文件，只需在终端运行`webpack`即可，这条命令会自动引用`webpack.config.js`中的配置选项




http://www.jianshu.com/p/42e11515c10f