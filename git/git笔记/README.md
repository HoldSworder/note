# git 笔记

1. 准备工作
   创建 github 仓库
   关闭直接 push 权限
   在 settings

2. 创建开发分支
   master 分支一般为稳定版本
   dev 分支发布开发版本
   新建 create branch 创建 dev 分支

3. fork 项目到个人仓库
   右上角 fork 到自己的个人仓库

4. clone 到本地
   git clone (地址)即可
   此时看到的是 master 分支 并没有把 dev 分支 clone 下来
   1.git branch 命令查看本地分支 发现只有 master 分支
   2.git branch -a 查看所有分支 包括远程分支
   3.git checkout -b dev origin/dev 即可创建一个新的本地分支 dev 并把项目的 dev 放到本地的 dev 分支
   （命令的意思是创建一个 dev 分支-b 并把远程 dev 分支（origin/dev）的内容放在该分支 接着切换到该分支（checkout））
   现在使用 git branch 可以看到两个分支 ls 或者 dir 可以看到分支的内容
   git checkout master 即可切换到 master 分支

5. 和团队项目保持同步
   查看有没有设置 upstream 使用 git remote -v 命令查看
   如果没有 则使用 git remote add upstream 团队项目地址
   接着再次使用 git remote -v 显示 upstream 就好了

同步
git fetch upstream 获取项目新版本
git merge upstream/dev 将源分支（upstream/dev）合并到当前分支 dev

6. push 修改到自己的仓库
   git push

7. 请求合并到团队项目
   点击 Pull request
   create pull request 发起合并请求
