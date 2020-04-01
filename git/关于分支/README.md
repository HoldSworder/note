# git 中的分支开发

默认分支名 master

## 查看分支

1. 查看本地分支

        git branch

2. 查看远程分支

        git branch -r

3. 查看所有分支

        git branch -a

## 创建分支
1. 创建本地分支

        git branch [branch name]

2. 切换到分支

        git checkout [branch name]

3. push分支到github

        git push origin [branch name]

## 删除分支

1. 删除本地分支

        git branch -d [branch name]

2. 删除github远程分支

        git push origin :[branch name]


## 图示全部历史记录
git log --all --graph

## 一行显示信息
git log --oneline

## 合并分支
git merge(--Fast-forward) 分支名 （默认）如果两个分支来自同一个上游 合并操作不会留下痕迹

git merge --no-ff 让合并操作强行留下痕迹 容易回查问题

## tag

1. 新建1.0tag
git tag v1.0    

2. 推送tag到远端
git push origin --tags
