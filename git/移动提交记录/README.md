# git移动提交记录

## 1. cherry-pick 移动指定提交到当前所在位置下

```git
git cherry-pick [hash] [hash]

git cherry-pick c2 c4
      c1
    c2  c5 <- maset[HEAD]
    c3  c2'
    c4  c4'
```

## 2. 交互式rebase

```git
git rebase -i HEAD~4    // 使用ui界面调整 HEAD之前4个分支
```
