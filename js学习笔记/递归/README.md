概念就是函数调用本身 或者 两个函数相互调用

例如： 阶乘

n! = n * (n-1)!

当n = 0  n! = 1

    function fac(n) {
        if(n == 0){
            return 1
        }else{
            return n * fac(n-1)
        }
    }

递归一定要有终止条件