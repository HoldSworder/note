区分对象类型
------

用`typeof`凿凿附获取对象类型

存在 `numbei` `string` `boolean` `function` `undefined` `object`

包装对象
-----

可以用`new`创建包装对象

`number` `boolean` `string`都有包装对象

    typeof new Number(123); // 'object'
    new Number(123) === 123; // false

    typeof new Boolean(true); // 'object'
    new Boolean(true) === true; // false

    typeof new String('str'); // 'object'
    new String('str') === 'str'; // false


总结一下，有这么几条规则需要遵守：

*不要使用new Number()、new Boolean()、new String()创建包装对象；

*用parseInt()或parseFloat()来转换任意类型到number；

*用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

*通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

*typeof操作符可以判断出number、boolean、string、function和undefined；

*判断Array要使用Array.isArray(arr)；

*判断null请使用myVar === null；

*判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

*函数内部判断某个变量是否存在用typeof myVar === 'undefined'。


`number`对象调用`toSring()`方法会报SyntaxError:

此时需要特殊处理

    123..toString(); // '123', 注意是两个点！
    (123).toString(); // '123'