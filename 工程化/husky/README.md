# husky

husky git hook工具 可以设置在git各个阶段触发命令

## 常用钩子

* pre-commit
* commit-msg
* pre-push

## 自动配置

```shell
npx husky-init && yarn
```

## 配置pre-commit钩子

```js
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

eslint --fix ./src --ext .vue,.js,.ts
```

这样会在pre-commit时 执行eslint --fix命令 只有eslint通过才能成功commit

问题在于会eslint所有文件

## lint-staged

可以让husky的hook命令只作用于git add文件

### 配置

yarn add lint-staged -D

```package.json
"lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
},
```

修改pre-commit为 npx lint-staged
