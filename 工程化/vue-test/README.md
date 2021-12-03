# 单元测试

npm i @vue/test-utils@next jest vue-jest@next ts-jest -D

在项目根目录下新建 jest.config.js 文件

```js
module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$'
}
```

## 集成eslint

npm i @types/jest -D

```json
// ts.config.json
{
  "compilerOptions": {
    ...
    "types": ["vite/client", "jest"]
  },
}
```

npm i eslint-plugin-jest -D

```js
//.eslintrc.js
module.exports = {
  ...
  extends: [
    ...
    'plugin:jest/recommended'
  ],
  ...
}
```

## 配置husky

npx husky add .husky/pre-push "npm run test $1"
