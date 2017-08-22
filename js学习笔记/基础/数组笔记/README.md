数组对象方法  数组对象 array

indexOf  可以返回搜索元素的索引
arr.indexOf(10);//返回元素10的索引 如1

slice  截取array的部分元素 返回一个新的array
arr.slice(0,3);//从索引0开始，到索引3结束
arr.slice(3);//从索引3到最后
如果不给slice()传递参数 他就会从头到位截取 可以借此 复制一个array

push和pop
push()在末尾添加元素
pop()删除最后一个元素

unshift和shift
unshift()在头部添加元素
shift()删除第一个元素

sort()
在数组中默认排序

reverse()
翻转数组

splice() 万能方法
从指定的索引开始删除若干元素 在添加若干元素
arr.splice(2,3,'1','2');//从索引2开始删除3个元素，然后添加两个元素

concat() 
把当前的arr与另一个arr连接起来 返回一个新的arr
可以接受元素 或数组 会将arr自动拆开

join() 非常实用 
将当前arr的每个元素用指定的字符串链接 返回连接后的字符串



