# react-redux

## 使用方法

* Provider

在index.js中使用provider组件进行包裹 所有组件都可以访问store数据

```js
import { Provider } from 'react-redux
import store from './store'

const App = (
  <Provider store={store}>
    <Main>
  </Provider>
)
```