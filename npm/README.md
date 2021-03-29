安装node.js自动安装npm

使用国内镜像 cnpm 替代 npm

输入 npm -v 查看版本号

更新
----------

cpmn install npm@latest 更新最近版本

安装项目依赖
--------

install 简写 i

进入工作目录

npm init -y 初始化

package.json 保存项目相关信息

npm i jquery 安装依赖

npm uninstall jquery 卸载依赖

npm update jquery 更新依赖

npm i jquery@xx  安装特定版本

在工作目录下新建一个node_modules目录 引用地址即可使用

npm常用配置
----------

package.json的scripts中指定的命令

如test

输入 npm run test 会运行之后代码

开发环境依赖
-------

npm i webpack --save-dev

将webpack设置为开发环境依赖 不会在生产环境下使用

会在package.json中 新建devDependencies

与dependencies区分
