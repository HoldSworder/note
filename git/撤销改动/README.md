# 撤销分支上的改动

## 1. 本地分支

在本地分支中撤销使用reset，本地会立即回到回退分支

```git
git reset HEAD~1
```

--hard 会清空暂存区和工作区
--soft 保留工作目录 把重置带来的差异放进暂存区
--mixed(默认) 保留工作目录 清空暂存区

## 2. 远端分支

远端分支撤销使用revert，不同的是，会生成一个新的提交，用于撤回

```git
git revert HEAD

git push
```
