# 观察 DOM 变动 MutationObserver

MutationObserver 是一个可以监听 DOM 结构变化的接口。

## 方法

- observe－开始进行监听。接收两个参数－要观察的 DOM 节点以及一个配置对象。
- disconnect－停止监听变化。
- takeRecords－触发回调前返回最新的批量 DOM 变化。

## 使用

```js
function observer(el, func, filter = ['style']) {
    var observer = new MutationObserver(function (mutations, observer) {
        mutations.forEach(function (mutation) {
            func(mutation)
        })
    })
    var config = {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: filter
    }

    observer.observe(el, config)
}
```

## opiton

想要观察哪一种变动类型，就在 option 对象中指定它的值为 true。需要注意的是，必须同时指定 childList、attributes 和 characterData 中的一种或多种，若未均指定将报错。

```js
const option = {
  attributes: true, //属性的变动。
  characterData: true, //节点内容或节点文本的变动。
  childList: true, //子节点的变动（指新增，删除或者更改）。
  subtree: true, //布尔值，表示是否将该观察器应用于该节点的所有后代节点。
  attributeOldValue: true, //布尔值，表示观察attributes变动时，是否需要记录变动前的属性值。
  characterDataOldValue: true, //布尔值，表示观察characterData变动时，是否需要记录变动前的值
  attributeFilter: ['style'] //数组，表示需要观察的特定属性（比如['class','src']）。
}
```
