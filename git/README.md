# git test

## 强制拉取 覆盖本地

```git
git fetch --all
git reset --hard master
git pull
```

## 放弃此次合并

```git
git merge --abort
```

## 已经被纳入了版本管理 修改.gitignore无效

```git
git rm -r --cached .
git add .
git commit -m '更新 .gitignore'
```

## 同步github仓库 更新到最新的库（与github上的远程库同步）

```git
git fetch --all
git reset --hard origin/master
```
