js对象中`Date`对象用来表示日期和时间

要获取系统当前时间，用：

    var now = new Date();
    now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
    now.getFullYear(); // 2015, 年份
    now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
    now.getDate(); // 24, 表示24号
    now.getDay(); // 3, 表示星期三
    now.getHours(); // 19, 24小时制
    now.getMinutes(); // 49, 分钟
    now.getSeconds(); // 22, 秒
    now.getMilliseconds(); // 875, 毫秒数
    now.getTime(); // 1435146562875, 以number形式表示的时间戳

如果要创建一个指定日期和时间的`Date`对象，可以：

    var d = new Date(2015, 5, 19, 20, 15, 30, 123);
    d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

或者传入一个符合ISO 8601格式的字符串：

    var d = new Date(1435146562875);
    d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)

第二种方法会返回一个时间戳

时间戳转化为对象：

    var d = new Date(1435146562875);
    d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)

时区
----

`Date`对象表示的时间是按浏览器所在的时区显示的，可以显示调整后的UTC时间

    var d = new Date(1435146562875);

    d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关

    d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时

时间戳
----
时间戳是一个自增的整数，从1970年1月1日0时整的GMT时区开始的那一刻，到现在的毫秒数。假设浏览器所在电脑的时间是准的，无论哪个时区的电脑，他们此刻产生的时间戳数字都是一样的，所以，时间戳可以精确的表示一个时刻，并与时区无关。

要获取当前的时间戳：

    if (Date.now) {
        alert(Date.now()); // 老版本IE没有now()方法
    } else {
        alert(new Date().getTime());
    }