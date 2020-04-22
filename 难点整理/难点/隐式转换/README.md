# 隐式转换

1. number

number => boolean   除了0，-1，NaN都为true

number => string    

2. string

string => boolean   除了空串都为true

string => number    非数字为NaN

3. undefined/null

undefined/null => boolean   false

## 需要注意的是

1. 对象转字符串

Object => string    [object, Object]

2. 数组转数字

[] => number   0

[1] => number   1

[1,2] => number NaN

其他所有情况NaN

3. 引用类型转布尔

{} => true

[] => true