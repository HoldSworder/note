# 关系模型

每一行称为记录

每一列成为字段

字段定义了数据类型，以及是否允许为NULL。NULL表示字段数据不存在。NULL！=0/''

> 通常情况下，字段应该避免允许为NULL。不允许为NULL可以简化查询条件，加快查询速度，也利于应用程序读取数据后无需判断是否为NULL。

## 主键

每张关系表的每两条记录中，能唯一区分不同记录的，叫做主键，通常为ID，不使用任何业务相关的字段作为主键

常见的可作为id字段的类型有

* 自增整数类型：数据库会在插入数据时自动为每一条记录分配一个自增整数
* 全局唯一GUID类型：使用一种全局唯一的字符串作为主键。GUID算法生成

```sql
BIGINT NOT NULL AUTO_INCREMENT
```

INT自增上限为21亿 BIGINT自增上限为922亿亿

## 外键

通过表内某一个字段 将记录对应到另一个表的数据

可以通过外键约束实现

```sql
ALTER TABLE students
ADD CONSTRAINT whateverName
FOREIGN KEY (class_id)
REFERENCES classes (id)
-- FOREIGN KEY (class_id)指定了class_id作为外键，REFERENCES classes (id)指定了这个外键将关联到classes表的id列（即classes表的主键）
```

