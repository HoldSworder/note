安装
=======
在官网下载安装 选择自定义安装

默认安装地址 C:\Program Files\MongoDB

配置
-------
新建一个MongoDB文件夹 在文件夹内新建三个文件夹分别为

data 存放数据文件

etc  存放配置文件

logs 存放日志

在etc文件夹内新建mongo.conf配置文件

输入配置内容：

    #数据库路径
    dbpath=c:\MongoDB\data\
    #日志输出文件路径
    logpath=c:\MongoDB\logs\mongodb.log
    #错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
    logappend=true
    #启用日志文件，默认启用
    journal=true
    #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
    quiet=true
    #端口号 默认为27017
    port=27017
    # #指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）
    # storageEngine=mmapv1
    # 
    #http配置 不需要在网页访问日志可以不进行配置
    httpinterface=true

在cmd（管理员）中路径为MongoDB安装路径

C:\Program Files\MongoDB\Server\3.4\bin

输入C:\Program Files\MongoDB\Server\3.4\bin>mongod --config c:\MongoDB\etc\mongo.conf

启用配置文件 即可在localhost:28017访问日志 在27017访问mongodb

本地配置服务
----------
输入C:\Program Files\MongoDB\Server\3.4\bin>mongod --config c:\MongoDB\etc\mongo.conf --install --serviceName "MongoDB" 

在计算机搜索service打开服务即可找到MongoDB 启用

配置环境变量
----------
右键计算机>属性>高级系统设置>环境变量>系统变量>path>新建>输入C:\Program Files\MongoDB\Server\3.4\bin

即可直接执行mongo命令 不需要输入一大串地址

