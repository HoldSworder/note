# 修改数据

## 插入数据

* INSERT INTO <表名> (字段1，字段2...) VALUES (值1，值2)

```sql
INSERT INTO students (class_id, name) VALUES (2, '大牛')

-- 批量添加
INSERT INTO students (class_id, name, gender, score) VALUES
  (1, '大宝', 'M', 87),
  (2, '二宝', 'M', 81);

```

## 更新数据

* UPDATE <表名> SET <数据> WHERE ...

```sql
-- 更新id为1的数据
UPDATE student SET name='大牛', score=66 WHERE id=1

-- 批量更新
UPDATE students SET name='小牛', score=77 WHERE id>=5 AND id<=7

-- 使用表达式
UPDATE students SET score=score+10 WHERE score<80

-- 如果没有WHERE条件 整个表记录都会被更新
```

## 删除数据

* DELETE FROM <表名> WHERE ...

```sql
DELETE FROM students WHERE id=1

-- 没有WHERE条件会删除整个表记录
```


