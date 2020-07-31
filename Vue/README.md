# 深入了解Vue

## 目录结构

1. compiler： 编译相关
2. core：核心代码
3. platforms： 跨端、平台相关
4. server：服务端渲染SSR
5. sfc：解释器
6. shared：辅助方法

## Vue对象
在 **/core/instance/index** 中可以找到一个Vue的构造函数，不使用Class定义的原因是因为用构造函数能很方便的拆分原型中的方法

然后在下方利用几个引入的Mixin函数在Vue的原型上挂载了一些方法

在 **/core/global-api/** 中又给Vue挂载了一些静态方法

## 为什么能直接用this访问props、methods、data中的数据

在vue的 **init/initState**中可以发现，vue将data对象挂载到了vm._data中

然后在initData函数中遍历了methods、props避免命名重复，并且使用proxy函数中使用 *Object.defineProperty* 代理了vm._data

使得我们在访问this.xx的时候实际上是访问了this._data.xx

## new Vue的时候发生了什么

vue会将传入vue的参数转化为render对象

所以直接写render的时候会性能更高

然后会在 **initRender**中调用render函数里利用**createElement**方法获取vnode

    vnode = render.call(vm._renderProxy, vm.$createElement)

vnode通过patch方法转化为真实的DOM

## 运行流程

1. 初始化及挂载

在new Vue()后。vue会调用_init函数进行初始化，会初始化生命周期、时间、props、methods、data、computed和watch等。

其中最重要的是通过Object.defineproperty设置getter和setter函数，用来实现响应式和依赖收集。

初始化之后调用$mount会挂载组件，如果是运行时编译，即不存在runder function但是存在template的情况，需要进行编译步骤（vue模版编译成render对象）

2. 编译

编译可分为parse、optimize和generate三个阶段 最终得到render function

* parse会用正则等方法解析template模板中的指令、class、style等数据形成AST
* optimize的主要作用是标记static静态节点，之后patch更新的时候diff算法会跳过静态节点，从而优化性能
* generate是将AST转化成render function字符串的过程，得到结果是render的字符串及statticRenderFns字符串

3. 响应式

[双向绑定原理](../难点整理/面试题集/vue双向绑定原理/README.md)

4. Virtual Dom

render function 会被转化成VNode节点 VirtualDOM其实就是一颗以js对象为基础的树

是对真实DOM的抽象，最终可以通过一系列操作使树映射倒真实环境上。

由于virtualDOM是以js对象为基础而不依赖真实平台环境 所以使其有了跨平台的能力

5. 更新视图

通过diff算法 将新旧VNode一起穿入patch进行比较 算出差异 最后只需要将差异对应的DOM进行修改即可


## 响应式系统的基本原理

### Object.defineProperty

Object.defineProperty(obj, prop, descriptor)

### 实现observer

```js
function defineReactive(obj, key, val) {
  Object.defineProprety(obj, key, {
    getter() {
      return val
    },
    setter(newVal) {
      if(newVal === val) return
      cb(newVal)
    }
  })
}

function observer(value) {
  if(!value || (typeof value !== 'object')) {
    return
  }

  for(const key in value) {
    defineReactive(value, key, value[key])
  }
}

class Vue {
  contructor(options) {
    this._data = options.data
    observer(this._data)
  }
}
```

## 响应式系统的依赖收集追踪原理

### 为什么要依赖收集

简单来说就是 将变量变化时需要进行的动作 收集到一起进行管理

比如有时候声明了变量 但是视图中并没有引用该变量 

在变化时 通知依赖该变量的视图层进行更新

### 订阅者Dep

```js
class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    for(const item of this.subs) {
      item.update()
    }
  }
}
```

### 观察者Watcher

```js
class Watcher {
  constructor() {
    //在new一个watcher的时候将该对象赋值给Dep.target
    Dep.target = this
  }

  update() {
    console.log('更新视图')
  }
}

Dep.target = null
```

### 依赖收集

```js
function defineReactive(obj, key, val) {
  const dep = new Dep()

  Object.defineProprety(obj, key, {
    getter() {
      dep.addSub(Dep.target)
      return val
    },
    setter(newVal) {
      if(newVal === val) return
      cb(newVal)
    }
  })
}

function observer(value) {
  if(!value || (typeof value !== 'object')) {
    return
  }

  for(const key in value) {
    defineReactive(value, key, value[key])
  }
}

class Vue {
  contructor(options) {
    this._data = options.data
    observer(this._data)

    new Watcher()
  }
}
```


### 总结

在get数据的时候 将当前的watcher对象收集到dep中 在set数据的时候 通知dep中的所有watcher进行更新

前提条件还有：

    1. 触发get方法 (在render function进行渲染的时候 其中的依赖对象都会被读取)

    2. 新建一个watcher对象(new一个 Dep.target将会指向该watcher)



## 实现Virtual DOM下的一个VNode节点

### 实现一个VNode

简单来说VNode就是一个js对象 来描述DOM信息

```js
class VNode {
  constructor(tag, data, children, text, elm) {
    this.tag = tag  //标签名
    this.data = data  //数据信息 如props、attrs
    this.children = children  //子节点 为一个数组
    this.text = text  //节点文本
    this.elm = elm  //当前节点对应的真实dom节点
  }
}
```

比如

```js
<template>
  <span class="demo" v-show="isShow">
    This is a span
  </span>
</template>

function render() {
  return new VNode('span', {
    //指令集合数组
    directives: [{
      //v-show指令
      rawName: 'v-show',
      expression: 'isShow',
      name: 'show',
      value: true
    }],
    //静态class
    staticClass: 'demo'
  }, 
  //子节点 文本节点
  [new VNode(undefined, undefined, undefined, 'This is a span')])
}

//转化为VNode
{
  tag: 'span',
  data: {
    directives: [{
      //v-show指令
      rawName: 'v-show',
      expression: 'isShow',
      name: 'show',
      value: true
    }],
    //静态class
    staticClass: 'demo'
  },
  text: undefined,
  children: [{
    tag: undefined,
    data: undefined,
    text: 'This is a span',
    children: undefined
  }]
}
```

由此类推

```js
//创建一个空节点
function createEmptyVNode() {
  const node = new VNode()
  node.text = ''
  return node
}

//创建一个文本节点
function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

//克隆一个VNode节点
function cloneVNode(node) {
  const clone = new VNode(
    node.tag,
    node.data,
    node.children,
    node.text,
    node.elm
  )
}
```

## template模板是怎样通过compile编译的

### compile

compile编译可以分为parse、optimize与generate三个阶段

例子: 

```js
<div :class="c" class="demo" v-if="isShow">
    <span v-for="item in sz">{{item}}</span>
</div>

var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';

```

### parse

parse会用正则等方式将template模板进行字符串解析，得到指令、class、style等数据，形成AST（树状结构的源码）

```js
{
  //标签属性的map，记录标签上的属性
  'attrsMap': {
    ':class': 'c',
    'class': 'demo'
    'v-if': 'isShow'
  },
  //解析得到的:class
  'classBinding': 'c',
  // 标签属性v-if
  'if': 'isShow',
  //v-if的条件
  'ifConditions': [{
    'exp': 'isShow'
  }],
  //标签属性class
  'staticClass': 'demo',
  // 标签的tag
  'tag': 'div',
  //子标签数组
  'children': [{
    'attrsMap': {
      'v-for': 'item in sz',
    },
    //for循环的参数
    'alias': 'item',
    //for循环的对象
    'for': 'sz',
    //for循环是否已经被处理的标记位
    'forProcessed': true,
    'tag': 'span',
    'children': [{
      //表达式， _s是一个转字符串的函数
      'expression': '_s(item)',
      'text': '{{item}}'
    }]
  }]
}
```

#### 正则
```js
const ncname = '[a-zA-Z_][\\w\\-\\.]*';
const singleAttrIdentifier = /([^\s"'<>/=]+)/
const singleAttrAssign = /(?:=)/
const singleAttrValues = [
  /"([^"]*)"+/.source,
  /'([^']*)'+/.source,
  /([^\s"'=<>`]+)/.source
]
const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)

const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
const startTagOpen = new RegExp('^<' + qnameCapture)
const startTagClose = /^\s*(\/?)>/

const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>')

const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g

const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/
```

### optimize

optimize的主要作用是优化

在之后patch的过程中 有一些静态节点是不会根据数据的变化而产生变化的 在这里就会被标记出来 patch的时候就能直接跳过减少性能损耗

所有节点会被加上static属性

### generate
generate 会将 AST 转化成 render funtion 字符串，最终得到 render 的字符串以及 staticRenderFns 字符串。

## 数据状态更新时的差异diff及patch机制

### 数据更新视图

在model进行操作时 会触发对应Dep中的Watcher对象 Watcher对象会调用对应的update来修改视图 最终是将新产生的VNode节点与老VNode节点进行一个patch的过程 对比得出差异

### patch

patch的核心diff算法

diff算法是通过同层的树节点进行比较而非对树进行逐层搜索遍历的方式，所以时间复杂度只有O(n),是一种相当高效的算法

```js
function patch(oldVnode, vnode, parentElm) {
  if(!oldVnode) { //如果没有老节点 就是新增节点 全部添加
    addVnodes(parentElm, null, vnode, 0, vnode.length - 1)
  }else if(!vnode) {//如果没有新节点 就是删除节点 全部老节点删除
    removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1)
  }else {
    if(sameVnode(oldVNode, vnode)) {  //如果相同节点 进行patch对比VNode
      patchVnode(oldVNode, vnode)
    }else { //不是相同节点 删除老节点 增加新节点
      removeVnodes(parentElm, oldVnode, 0, oldVnode.length - 1)
      addVnodes(parentElm, null, vnode, 0, vnode.length - 1)
    }
  }
}
```

#### sameVnoed

什么情况下 两个VNode会属于sameVnode
```js
function sameVnode(a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment && //是否为注释节点
    (!!a.data) === (!!b.data) &&
    sameInputType(a, b)
  )
}

function sameInputType(a, b) {
  if(a.tag !== 'input') return true
  let i
  const typeA = (i = a.data) && (i = i.attrs) && i.type
  const typeB = (i = b.data) && (i = b.attrs) && i.type
  return typeA === typeB
}
```

sameVnode只需要判断当key、tag、isComment、data同时定义，同时满足当标签类型为input时 type相同即可

#### patchVnode

当满足sameVnode时才会触发该函数 所以会进行对比

```js
function patchVnode(oldVnode, vnode) {
  if(oldVnode === vnode) {  //新老节点相同
    return 
  }


  //当新老几点都是静态的isStatic，并且key相同时 只要将componentInstance与elm从老节点拿过来即可
  //这里的isStatic就是之前编译时加上的 可以跳过比较
  if(vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key) {
    vnode.elm = oldVnode.elm
    vnode.componentInstance = oldVnode.componentInstance
    return 
  }

  const elm = vnode.elm = oldVnode.elm
  const oldCh = oldVnode.children
  const ch = vnode.children

  if(vnode.text) {  //当新VNode节点是文本节点时 直接设置text
    //nodeOps是一个适配平台的对象
    nodeOps.steTextContent(elm, vnode.text)
  }else {
    if(oldCh && ch && (oldCh !== ch)) {
      updateChildren(elm, oldCh, ch)
    }else if(ch) {  //如果只有ch存在
      if(oldVnode.text) nodeOps.setTextContent(elm, '') //如果是文本节点 先清空文本内容
      addVnodes(elm, null, ch, 0, ch.length - 1)  //批量添加子节点
    }else if(oldCh) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    }else if(oldVnode.text) {
      nodeOps.setTextContent(elm, '')
    }
  }
}
```

#### updateChildren

```js
function updateChildren(parentElm, oldCh, newCh) {
  //新老两个VNode的开始结束索引
  let oldStartIdx = 0
  let newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let newEndIdx = newCh.length - 1

  //分别指向这几个索引对应的VNode节点
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]

  let oldKeyToIdx, idxInOld, elmToMove, refElm

  //在循环过程中 oldStartIdx/newStartIdx/oldEndIdx/newEndIdx会逐渐向中间靠拢 直到相交
  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    //oldStartVnode和oldEndVnode不存在时 更新idx进而更新vnode指向
    if(!oldStartVnode) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if(!oldEndVnode) {
      oldEndVnode = oldCh[--oldEndIdx]
    }
    //oldStartIdx、newStartIdx、oldEndIdx 以及 newEndIdx 两两比对的过程，一共会出现 2*2=4 种情况
    else if(sameVnode(oldStartVnode, newStartVnode)) {  //两个start都相同
      patchVnode(oldStartVnode, newStartVnode)  //直接patch
      oldStartVnode = oldCh[++oldStartIdx]  //更新idx指向
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) { //同上
        patchVnode(oldEndVnode, newEndVnode);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {  //old的start等于new的end
        patchVnode(oldStartVnode, newEndVnode); //进行patch
        //将old的start直接移动到end的后面
        nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm)); 
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode);
        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
    } 
    //以上情况都不符合
    else {
      let elmToMove = oldCh[idxInOld];
      //通过生成的map表 获取相同key的节点
      if (!oldKeyToIdx) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      // 相同key的节点
      idxInOld = newStartVnode.key ? oldKeyToIdx[newStartVnode.key] : null;
      //如果没有找到相同的节点
      if (!idxInOld) {
          //新建节点
          createElm(newStartVnode, parentElm);
          newStartVnode = newCh[++newStartIdx];
      } else {
          elmToMove = oldCh[idxInOld];
          //在所有节点中（非相同位置）找到相同节点 就把相同的节点转移到start或者end的前面 
          if (sameVnode(elmToMove, newStartVnode)) {
              patchVnode(elmToMove, newStartVnode);
              oldCh[idxInOld] = undefined;  //方便之后如果再次查到相同key可以提示重复
              nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
          } 
          //在所有节点中都没有找到相同节点 创建一个新节点插入到parentElm的子节点中
          else {
              createElm(newStartVnode, parentElm);
              newStartVnode = newCh[++newStartIdx];
          }
      }

  
      //结束while后 如果idx对不上 
      if (oldStartIdx > oldEndIdx) {  //老节点对比完了 新节点还有剩余 将新节点插入到真实DOM中
        refElm = (newCh[newEndIdx + 1]) ? newCh[newEndIdx + 1].elm : null;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx);
      } else if (newStartIdx > newEndIdx) { //新节点对比完了 老节点还有剩余 删除老节点
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
}

//产生key与index索引对应的map表
function createKeyToOldIdx (children, beginIdx, endIdx) {
    let i, key
    const map = {}
    for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key
        if (isDef(key)) map[key] = i
    }
    return map
}
```

## 批量异步更新策略及nextTick原理

### 为什么要异步更新

vue在我们修改data中的数据之后的流程简单来说就是**setter => Dep => Watcher => patch => 视图**

假设有个一个事件令data不停变化
```js
<div>{{number}}</div>

data() {
  return {
    number
  }
}

methods: {
  handleClick() {
    for(let i = 0; i < 1000; i++) {
      this.number ++
    }
  }
}
```

number每次被+1的时候 都会触发setter方法

在默认情况下 每次触发某个数据的setter方法时 对应的Watcher对象会被push一个队列中 在下次tick的时候将这个队列全部拿出来执行

### nextTick

vue使用promise settimeout等方法在微任务队列（microtask）或是task中创建一个事件，目的是在当前栈执行完毕以后才会去执行函数中的回调事件

```js
let callbacks = []
let pending = false

function nextTick(cb) {
  callbacks.push(cb)

  if(!pending) {
    pending = true
    setTimeout(fushCallbacks, 0)
  }
}

function fushCallbacks() {
  pending = false
  const copy = [...callbacks]

  for(let item of copy) {
    item()
  }
}
```

### Watcher

watcher实际更新DOM是其run方法 所以不会出现重复的Watcher对象 这里就需要一个id进行过滤

update由Dep调用
```js
let uid = 0

class Watcher {
  constructor() {
    this.id = ++uid
  }
  
  update() {
    console.log('watch' + 'update')
    queueWatcher(this)
  }

  run() {
    console.log('watch' + '视图更新')
  }
}
```

### queueWatcher

```js
let has = {}  //过滤重复watcher对象
let queue = []  //队列
let waiting = false //标记是否向

function queueWatcher(watcher) {
  const id = watcher.id
  if(has[id] == null) {
    has[id] = true

    queue.push(watcher)

    if(!waiting) {
      waiting = true
      nextTick(flushSchedulerQueue)
    }
  }
}
```

### flushSchedulerQueue

```js
function flushSchedulerQueue() {
  let watch, id

  for(let watcher of queue) {
    id = watcher
    has[id] = null
    watcher.run()
  }

  waiting = false
}
```

## vuex状态管理的工作原理

### 安装

```js
//实际会调用插件提供的install方法
Vue.use(Vuex)

let Vue
function install(Vue) {
  Vue.mixin({ beforeCreate: vuexInit })
  Vue = _Vue
}

//如果是根节点直接获取optoins.store 否则向腹肌诶单获取
vuexInit() {
  const options = this.$options
  if(options.store) {
    this.$store = options.store
  }else {
    this.$store = options.parent.$store
  }
}

```

### store

#### 数据的响应化

```js
//在store的构造函数中对state进行响应式化
constructor() {
  this._vm = new Vue({
    data: {
      $$state: this.state
    }
  })
}
```

### api

#### commit

commit是用来触发mutation的

```js
commit(type, payload, _options) {
  const entry = this._mutations[type]
  entry.forEach(function commitIterator(handler) {
    handler(payload)
  })
}
```

#### dispatch

```js
dispatch(type, payload) {
  const entry = this._actions[type]

  return entry.length > 1 ?
  Promise.all(entry.map(handler => handler(payload))) :
  entry[0](payload)
}
```