查询数据库
-----
show dbs 查询当前数据库

新建数据库
------
use xxx  新建xxx数据库  新建后由于没有数据所以不显示

创建集合
-------
db.createCollection('xxx')  创建一个名为xxx的集合

插入数据
----------
db.xxx.insert({id:123,name:"hello"}) 创建集合并插入数据

查看集合
------
show collections 

删除数据库
--------
db.dropDatabase()

删除集合
-------
db.xxx.drop()  删除xxx集合

查询数据
---------
db.xxx.find() 可以查询xxx集合下的所有数据
db.xxx.findOne() 查询第一条数据

更新数据
---------
db.user.updata({userName:'jack'},{$set:{userAge:30}})
前面是查询条件 $set设置新值

条件查询
-------
db.xxx.find({userAge:{$gt:40}}) $gt代表大于 查询userAge大于40的集合  

删除集合
--------
db.xxx.remove({userId:101})  删除条件为userId:101的集合

导入数据库
-----------
mongoimport -d db_demo -c users --file /xxx
-d数据库名 -c集合名 --file地址