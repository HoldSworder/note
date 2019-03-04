    var
        r,
        arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

    r = arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    });

    alert(r.toString());



利用`filter`
`indexOf`总是返回第一个元素的位置，后续重复原色位置与`indexOf`返回位置不相等 就会被过滤