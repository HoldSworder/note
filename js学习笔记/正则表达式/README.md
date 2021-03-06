`\d`可以匹配一个数字

`\w`可以匹配一个字母或数字

`.`可以匹配任意字符

`*`表示任意数量字符（包括 0 个）

`+`表示至少一个字符

`?`表示 0 个或 1 个字符

`{n}`表示 n 个字符

`{n,m}`表示 n-m 个字符

更精确的匹配

可以用`[]`表示范围

- `[0-9a-zA-Z\_]`可以匹配一个数字、字母或下划线；

- `[0-9a-zA-Z\_]+`可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'js2015'等等；

- `[a-zA-Z\_\$][0-9a-zA-Z\_\$]*`可以匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是 JavaScript 允许的变量名；

- `[a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}`更精确地限制了变量的长度是 1-20 个字符（前面 1 个字符+后面最多 19 个字符）。

A|B 可以匹配 A 或 B，所以(J|j)ava(S|s)cript 可以匹配'JavaScript'、'Javascript'、'javaScript'或者'javascript'。

^表示行的开头，^\d 表示必须以数字开头。

$表示行的结束，\d$表示必须以数字结束。

你可能注意到了，js 也可以匹配'jsp'，但是加上^js\$就变成了整行匹配，就只能匹配'js'了。

## 创建一个 RegExp 对象

第一种是直接通过`/正则表达式/`写出来，第二种方式是通过`new RegExp('正则表达式')`创建

    var re1 = /ABC\-001/;
    var re2 = new RegExp('ABC\\-001');

    re1; // /ABC\-001/
    re2; // /ABC\-001/

第二种由于转义问题 两个`\\`实际上是一个`\`

## 如何判断正则表达式匹配

    var re = /^\d{3}\-\d{3,8}$/;
    re.test('010-12345'); // true
    re.test('010-1234x'); // false
    re.test('010 12345'); // false

EegExp 对象的`test()`方法用于测试给定的字符串是否符合条件

## 切分字符串

用正则表达式切分字符串比用固定的字符更灵活

    'a b   c'.split(' '); // ['a', 'b', '', '', 'c']

嗯，无法识别连续的空格，用正则表达式试试：

    'a b   c'.split(/\s+/); // ['a', 'b', 'c']

无论多少个空格都可以正常分割。加入,试试：

    'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']

再加入;试试：

    'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']

如果用户输入了一组标签，下次记得用正则表达式来把不规范的输入转化成正确的数组。
