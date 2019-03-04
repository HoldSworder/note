1.准备工作
创建github仓库
关闭直接push权限
在settings

2.创建开发分支
master分支一般为稳定版本
dev分支发布开发版本
新建create branch创建dev分支

3.fork项目到个人仓库
右上角fork到自己的个人仓库

4.clone到本地
git clone (地址)即可
此时看到的是master分支 并没有把dev分支clone下来
    1.git branch 命令查看本地分支 发现只有master分支
    2.git branch -a 查看所有分支 包括远程分支
    3.git checkout -b dev origin/dev 即可创建一个新的本地分支dev并把项目的dev放到本地的dev分支
      （命令的意思是创建一个dev分支-b 并把远程dev分支（origin/dev）的内容放在该分支 接着切换到该分支（checkout））
现在使用git branch 可以看到两个分支 ls 或者 dir可以看到分支的内容
git checkout master 即可切换到master分支

5.和团队项目保持同步
查看有没有设置upstream 使用 git remote -v 命令查看
如果没有 则使用 git remote add upstream 团队项目地址 
接着再次使用 git remote -v 显示upstream 就好了

同步
git fetch upstream 获取项目新版本
git merge upstream/dev 将源分支（upstream/dev）合并到当前分支dev

6.push修改到自己的仓库
git push

7.请求合并到团队项目
点击 Pull request
create pull request 发起合并请求
