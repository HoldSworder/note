运行步骤
在需要同步的文件夹右键 git bush here

运行 git init 初始化仓库 会新增一个隐藏的.git配置文件

git status 查看文件变化

git add -A 添加所有文件

git commit -m "输入提交信息"

git log  查看提交信息

git diff  查看文件做了哪些变化

git checkout -- . 撤销更改(没有commit的情况下)

//版本回退
在git log中可以找到commit开头的16进制版本号
git reset --hard xxxxxxx(取前7位就可以)
会直接删除最新版的git log中的信息

//回到最新版
git reflog 可以查看所有HEAD的变化情况和提交信息
可以在其中找到所有的版本号
再利用 git reset 命令回到最新版

//删除文件夹内所有未追踪的文件
git clean -xf

//中文乱码
中文文件名在git status中乱码
使用 git config --global core.quotepath false

//将git与github关联
1.本地配置用户名和邮箱
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"

2.生成ssh key
运行 ssh-keygen -t rsa -C "你的邮箱"
回车三次
clip < ~/.ssh/id_rsa.pub 命令将ssh key复制到剪贴板

3.打开github 进入settings
左边SSH and GPG keys
new SSH key
粘贴到key
add SSH key
执行ssh -T git@github.com 测试是否成功（选择yes）

4.创建远程仓库关联本地
取到github仓库的SSH地址（clone or download中）ssh比https快
运行 git remote add origin 你复制的地址
git push -u origin master 将本地仓库上传至github
以后直接执行 git push 命令即可

这里有几个坑
1.git无法pull仓库refusing to merge unrelated histories
 需要合并两个不同的仓库和项目
 git pull origin master ----allow-unrelated-histories  即可

2. ! [rejected] master -> master (non-fast-forward)
 两个仓库的文件不同 
 方法一：git pull到本地 再上传
 方法二：git push -f 强制覆盖




其他命令

git pull 复制代码到本地

git clone （地址） 下载代码
快速关联空仓库方法
利用 git clone命令
省去了 init / git remote add origin /git push -u origin master



