# 安装homebrew

## 使用国内源

```zsh
# gitee源
/bin/bash -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
# 选择中科大
```

## 配置环境变量

`echo $SHELL`判断当前默认shell

```zsh
# 新系统使用zsh
echo 'eval "$(/usr/local/Homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/usr/local/Homebrew/bin/brew shellenv)"
```

```bash
echo 'eval "$(/usr/local/Homebrew/bin/brew shellenv)"' >> ~/.bash_profile
eval "$(/usr/local/Homebrew/bin/brew shellenv)"
```
