利用数组方法`sort()`进行排序

要按数字大小排序，我们可以这么写：

    var arr = [10, 20, 1, 2];
    arr.sort(function (x, y) {
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    }); // [1, 2, 10, 20]

`sort()`的坑
此方法的排序依据是`ASCII码`

所以会出现 A B a 或者 1 10 2 20

这样的排序