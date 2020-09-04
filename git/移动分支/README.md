# git 移动分支

可以通过 checkout 移动 head 指向 来实现移动分支

## 1. ^

移动 head 到父节点

```git
git checkout master

git checkout master^  // 移动到master的父节点
```

## 2. ~

```git
git checkout master

git checkout master~4 // 向上移动4步
```

## 3. 强制指向分支

```git
git branch -f master HEAD~4 // 将master分支指向HEAD之上4步
```
