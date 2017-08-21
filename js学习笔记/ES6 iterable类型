ES6引入新的interable类型
Array Map Set 都属于iterable类型

此类型可以使用 for...of循环来遍历

用法
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    alert(x);
}
for (var x of s) { // 遍历Set
    alert(x);
}
for (var x of m) { // 遍历Map
    alert(x[0] + '=' + x[1]);
}


forEach方法：
    var a = ['A', 'B', 'C'];
    a.forEach(function (element, index, array) {
        // element: 指向当前元素的值
        // index: 指向当前索引
        // array: 指向Array对象本身
        alert(element);
    });

        Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：

        var s = new Set(['A', 'B', 'C']);
        s.forEach(function (element, sameElement, set) {
            alert(element);
        });
        Map的回调函数参数依次为value、key和map本身：

        var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
        m.forEach(function (value, key, map) {
            alert(value);
        });
        如果对某些参数不感兴趣，由于JavaScript的函数调用不要求参数必须一致，因此可以忽略它们。例如，只需要获得Array的element：

        var a = ['A', 'B', 'C'];
        a.forEach(function (element) {
            alert(element);
        });