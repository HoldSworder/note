在JSON中，一种有这么几种数据类型

* number: 和JavaScript的`number`完全一致；
* boolean: 就是JavaScript的`true`或`false`;
* string: 就是JavaScript的`string`;
* null: 就是JavaScript的`string`;
* array: 就是JavaScript的`Array`表示方式 -- `[]`;
* object: 就是JavaScript的`{...}`表示方法；

以及上面的任意组合。

字符集必须是UTF-8。为了统一解析，JSON的字符串规定必须用双引号`""`，Object的键也必须用双引号`""`。

序列化
------

把对象序列化为JSON格式的字符串

    var xiaoming = {
        name: '小明',
        age: 14,
        gender: true,
        height: 1.65,
        grade: null,
        'middle-school': '\"W3C\" Middle School',
        skills: ['JavaScript', 'Java', 'Python', 'Lisp']
    };

    JSON.stringify(xiaoming); // '{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}'


按缩进输出

    JSON.stringify(xiaoming,null,'');

结果：

    {
        "name": "小明",
        "age": 14,
        "gender": true,
        "height": 1.65,
        "grade": null,
        "middle-school": "\"W3C\" Middle School",
        "skills": [
            "JavaScript",
            "Java",
            "Python",
            "Lisp"
        ]
    }

第二个参数用于控制如何筛选对象的键值，如果只想输出指定的属性，可以传入`Array`：

    JSON.stringify(xiaoming, ['name', 'skills'], '  ');

结果：

    {
        "name": "小明",
        "skills": [
            "JavaScript",
            "Java",
            "Python",
            "Lisp"
        ]
    }

也可以传入一个函数，对象的每个键值对都会被函数先处理：

    function convert(key, value) {
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        return value;
    }

    JSON.stringify(xiaoming, convert, '  ');

上面的代码把所有属性值都变成大写：

    {
        "name": "小明",
        "age": 14,
        "gender": true,
        "height": 1.65,
        "grade": null,
        "middle-school": "\"W3C\" MIDDLE SCHOOL",
        "skills": [
            "JAVASCRIPT",
            "JAVA",
            "PYTHON",
            "LISP"
        ]
    }


精确控制如何序列化小明，可以给`xiaoming`定义一个`toJSON()`的方法，直接返回JSON应该序列化的数据：

    var xiaoming = {
        name: '小明',
        age: 14,
        gender: true,
        height: 1.65,
        grade: null,
        'middle-school': '\"W3C\" Middle School',
        skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
        toJSON: function () {
            return { // 只输出name和age，并且改变了key：
                'Name': this.name,
                'Age': this.age
            };
        }
    };

    JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'


反序列化
-----

拿到一个JSON格式的字符串，直接用`JSON.paarse()`把他变成一个JavaScript对象

    JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
    JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
    JSON.parse('true'); // true
    JSON.parse('123.45'); // 123.45

`JSON.parse()`还可以接受一个函数，用来转换解析出的属性：

    JSON.parse('{"name":"小明","age":14}', function (key, value) {
        // 把number * 2:
        if (key === 'name') {
            return value + '同学';
        }
        return value;
    }); // Object {name: '小明同学', age: 14}