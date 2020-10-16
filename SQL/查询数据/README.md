# 查询数据

## 基本查询

- SELECT 查询关键字

- \* 表示所有列

- FROM 表示将要从哪个表查询

```SQL
SELECT * FROM <表名>
-- 可以查询一个表的所有行和所有列
```

## 条件查询

- WHERE 关键字来设定查询条件

- AND 与

- OR 或

- NOT 非

```sql
SELECT * FROM <表名> WHERE <条件表达式>
-- 查询成绩大于80的学生
SELECT * FROM students WHERE score >= 80

SELECT * FROM studens WHERE score >= 80 AND gender = 'M'

SELECT * FROM studens WHERE score >= 80 OR gender = 'M'

SELECT * FROM studens WHERE NOT class_id = 2
```

如果不加括号，条件运算按照 NOT、AND、OR 的优先级进行，即 NOT 优先级最高，其次是 AND，最后是 OR。加上括号可以改变优先级。

- _<>_ 表示不相等

- LIKE 判断相似 name LIKE 'ab%' %表示任意字符，例如'ab%'将匹配'ab'，'abc'，'abcd'

## 投影查询

不查询所有列 只查询指定列

```sql
SELECT id, score, name FROM students

SELECT id, score points, name FROM students
-- 设置score的别名为points
```

## 排序

不指定排序的话 会按照 id 也就是主键进行排序

- ORDER BY 排序关键字
- DESC 倒序关键字
- ASC 升序 默认省略

```sql
SELECT id, name, gender, score FROM students ORDER BY score

SELECT id, name, gender, score FROM students ORDER BY score DESC

SELECT id, name, gender, score FROM students ORDER BY score DESC, gender
-- 如果score有相同的，进一步按gender列排序
```

## 分页查询

- LIMIT [M] OFFSET [N] 每页 M 条 从第 N 条开始呈现

```sql
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 0
-- 从students表获取id、name、gender、score字段按照score倒序排列 每页3条 从第0条开始（SQL索引从0开始） 超出不会报错 会返回一个空集
```

OFFSET [N] 可省略 默认为 0

## 聚合查询

- COUNT() 统计记录数量

```sql
SELECT COUNT(*) FROM students   --查询students一共有多少条数据
SELECT COUNT(*) num FROM students   --设置别名
SELECT COUNT(*) boys FROM students WHERE gender = 'M'  --查询gender为M的一共有多少条
```

- SUM 计算某一列的合计值 该列必须为数值类型
- AVG 计算某一列的平均值 该列必须为数值类型
- MAX 计算某列的最大值
- MIN 计算某列的最小值

如果 WHERE 没有匹配到数据 COUNT 会返回 0 其他会返回 NULL

### 分组

- GROUP BY 进行分组操作

```sql
-- 先把class_id相同的列先分组 再分别计算
SELECT COUNT(*) num FROM students GROUP BY class_id

SELECT class_id COUNT(*) num FROM students GROUP BY class_id

SELECT class_id COUNT(*) num FROM students GROUP BY class_id, gender  --使用多个列分组
```

## 多表查询

- SELECT \* FROM <表 1> <表 2>

返回的列数是两表列数之和 行数是两表行数之积

- FROM <表名 1> <别名 1>, <表名 2> <别名 2>

```sql
SELECT * FROM students, classes
```

## 连接查询

- INNER JOIN **ON** 内连接

```SQL
SELECT s.id, s.name, s.class_id FROM students s
INNER JOIN classes c
ON s.class_id = c.id
-- 将classes表与students表连接 显示条件为id与class_id相同
```

外连接

- LEFT OUTER JOIN **ON** : 返回左表都存在的行，如果某一行仅存在左表，那么结果集就会以 NULL 填充剩下的字段

- RIGHT OUTER JOIN **ON**

- FULL OUTER JOIN **ON** : 返回两表所有记录全部选择，自动把对方不存在的列填充为 NULL
