# 子模块 git submodule

提取一个公共的库提供给多个项目使用，需要使用git submodule进行维护

使用后会生成.gitmodules文件夹

## 使用

    git submodule add 地址 路径

## 更新

    git submodule foreach git pull

## 拉取

    git submodule update --init --recursive

## 删除
