# 安装nvm

安装nvm进行node版本管理

## 使用homebrew安装nvm

```zsh
brew install nvm
```

## 配置环境变量

```zsh
echo "source $(brew --prefix nvm)/nvm.sh" >> .bash_profile
```

## 将bash_profile加到开机自启

```zsh
# zshrc 配置开启自启文件
vim ~/.zshrc

# 在zshrc最后添加
source ~/.bash_profile
```

## 无法更改全局node版本 坑

在.bash_profile文件中，需要将`export NVM_DIR=~/.nvm`放在最后
