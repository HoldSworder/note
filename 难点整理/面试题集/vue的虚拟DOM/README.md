# vue中的虚拟DOM

vue中的虚拟dom实现过程大致为

1. 用js对象模拟DOM
2. 把虚拟DOM转成真是DOM并插入页面中
3. 事件修改虚拟DOM
4. 比较新旧两颗虚拟DOM树的差异，得到差异对象
5. 把差异对象应用到真实DOM树上

## 虚拟DOM的实现

```js
<div id="virtual-dom">
  <p>Virtual DOM</p>
    <ul id="list">
      <li class="item">Item 1</li>
      <li class="item">Item 2</li>
      <li class="item">Item 3</li>
    </ul>
  <div>Hello World</div>
</div> 


var ul = Element('div',{id:'virtual-dom'},[
  Element('p',{},['Virtual DOM']),
  Element('ul', { id: 'list' }, [
	Element('li', { class: 'item' }, ['Item 1']),
	Element('li', { class: 'item' }, ['Item 2']),
	Element('li', { class: 'item' }, ['Item 3'])
  ]),
  Element('div',{},['Hello World'])
]) 
document.body.appendChild(ul.render())


class Element {
  constructor(el, attrs, children) {
    this.el = el
    this.attrs = attrs
    this.children = children || []
  }

  render() {
    const {el, attrs, children} = this
    let virtualDOM = document.createElement(el)
    for (const attrName in attrs) {
        const attrVal = attrs[attrName]
        virtualDOM.setAttribute(attrName, attrVal)
    }

    children.forEach(child => {
      let childEl

      if(child instanceof Element) {  //如果子节点也是虚拟DOM
        childEl = child.render()  //递归进行render
      }else {
        childEl = document.createTextNode(child)  //否则直接创建文本节点
      }

      virtualDOM.appendChild(childEl)
    })

    return virtualDOM
  }
}

```

## diff算法

如果完全比较变动前后两棵树的变化，那么diff算法的时间复杂度为O(n^3)，但是在前端中，很少会跨越层级移动DOM元素所以只会对同一层级的元素进行对比，时间复杂度就能降到O(n)

1. 深度优先遍历，记录差异

在深度优先遍历的时候，每遍历到一个节点就把该节点和新的树进行比较。如果有差异的话就记录到一个新的对象里面
```js
function diff(oldTree, newTree) {
  let index = 0  //当前节点的标志
  const patches = {}  //用来记录每个节点差异的对象

  dfsWalk(oldTree, newTree, index, patches)
  return patches
}

function dfsWalk(oldNode, newNode, index, patches) {
  const currentPatch = []
  if(typeof oldNode === 'string' && typeof newNode === 'string') {
    //文本内容改变
    currentPatch({type: patch.TEXT, content: newNode})
  }else if(newNode != null && newNode.tagName === oldNode.tagName && newNode.key === oldNode.key) {
    //节点相同，比较属性
    currentPatch({type: patch.PROPS, content: newNode})
  }else if(newNode !== null) {
    //新旧节点不同，需要替换
    currentPatch({type: patch.REPLACE, content: newNode})
  }

  if(currentPatch.length) {
    patches[index] = currentPatch
  }
}
```

2. 差异类型

    DOM操作导致的差异类型包括以下几种

    * 节点替换：如把div换成h1
    * 顺序互换：移动、删除、新增
    * 属性更改
    * 文本改变

3. 列表对比算法

如果只是互相移动节点位置，按照之前层级对比的方式，都会被替换掉，这样就会有性能浪费，实际上我们只需要移动节点就行了。

这个问题抽象出来就是字符串的最小编辑距离问题**Edition Distance**,最常见的解决方法是 **Levenshtein Distance**

## 将差异应用到真正的DOM树上

1. 深度优先遍历DOM树

```js
function patch(node, patches) {
  const walker = {index: 0}
  dfsWalk(node, walker, patches)
}

function dfsWalk(node, walker, patches) {
  //拿到当前节点的差异
  const currentPatches = patches[walker.index]

  //深度遍历子节点
  for(let i = 0; i < childNodes.length; i++) {
    
  }

  if(currentPatches) {
    //具体操作DOM树
    applyPatches(node, currentPatches)
  }
}
```