# 从头到尾打印链表
输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

```js
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse()
}
```