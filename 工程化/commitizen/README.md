# commitizen

自动生成commit message规范提交

## 安装

npm install commitizen -D

windows下要全局安装

npm install commitizen -g

## 配置

npx commitizen init cz-customizable --save-dev --save-exact

新建.cz-config.js文件

## 验证

安装 @commitlint/config-conventional 和 @commitlint/cli

npm i @commitlint/config-conventional @commitlint/cli -D

### 配置

新建commitlint.config.js文件

```js
module.exports = { extends: ['@commitlint/config-conventional'] }
```

### 使用

使用 husky 的 commit-msg hook 触发验证提交信息的命令

.husky目录下创建commit-msg

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit
```
