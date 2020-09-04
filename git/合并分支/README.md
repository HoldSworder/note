# git合并分支

git合并分支有两种方法 merge / rebase

## 1. merge

使用merge时可以从提交记录清晰的看到 从某分支指向某分支

```git
git checkout -b newBranch

git commit

git checkout master

git merge newBranch
```

## 2. rebase

使用rebase可以得到一个更加线性的提交记录，并不像merge一样指向 而是直接延续向下

```git
git checkout -b newBranch

git commit

git rebase master
```
