# 垃圾回收机制

## 标记-清除算法

由标记阶段和清除阶段构成，标记阶段将所有的活动对象做上相应的标记，清除阶段把那些没有标记的对象，也就是非活动对象进行回收。在搜索对象并进行标记的时候使用了深度优先搜索，尽可能的从深度上搜索树形结构。
