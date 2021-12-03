# 正则表达式

## 忽略大小写 i

```js
/testtest/i.test(str)
```

## 全局匹配 g

```js
/testtest/g.test(str)
```

## test

```js
/testest/.test(str)
```

## match

```js
str.match(/test/)
```

## 通配符

.能匹配任何一个字符串

```js
/hu./.test(str)
```

## 字符集 []

匹配字符集中的任意一个

```js
str.match(/b[aiu]g/) // bag/big/bug
```

## 连字符 -

可以匹配大量字符

```js
str.match(/[a-z]/gi) // 匹配所有字母
```

## 否定字符集 ^

```js
/[^aeiou]/gi  //匹配所有非元音字符
```

## 匹配一次或多次的字符 +

```js
/a+/g   // 全局匹配a或者aa字符串 
```

## 匹配零次或多次的字符 *

```JS
/Aa*/   // 匹配A及其之后出现的零个或多个a
/A*a/   // 匹配A开始 a结束
```

## 懒惰匹配 ?

```js
/t[a-z]*?i/
```
