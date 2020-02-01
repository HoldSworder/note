# 观察元素相交 IntersectionObserver 对象

IntersectionObserver 可以实现类似于监听目标元素的祖先元素与视窗的交叉状态，简单地说就是能监听到某个元素是否会被我们看到，当我们看到这个元素时，可以执行一些回调函数来处理某些事务。

## 实例化

```js
const io = new IntersectionObserver(callback, options)

const option = {
  root: document.querySelector('.box'), //设置祖先元素 默认为浏览器
  threshold: [0, 0.5, 1], //设定触发回调条件 默认为[0] 该处设置为相交到0 50% 100%触发三次callback
  rootMargin: '50px 0px 50px 0px' //扩大视窗范围 便于提前进行加载
}

const callback = function(entries) {
  console.log(entries)
  // boundingClientRect 目标元素的矩形信息
  // intersectionRatio 相交区域和目标元素的比例值 intersectionRect/boundingClientRect 不可见时小于等于0
  // intersectionRect 目标元素和视窗（根）相交的矩形信息 可以称为相交区域
  // isIntersecting 目标元素当前是否可见 Boolean值 可见为true
  // rootBounds 根元素的矩形信息，没有指定根元素就是当前视窗的矩形信息
  // target 观察的目标元素
  // time 返回一个记录从IntersectionObserver的时间到交叉被触发的时间的时间戳
}
```

## 方法

1. IntersectionObserver.disconnect()

   使 IntersectionObserver 对象停止监听工作。

2. IntersectionObserver.observe()

   使 IntersectionObserver 开始监听一个目标元素。

3. IntersectionObserver.takeRecords()

   返回所有观察目标的 IntersectionObserverEntry 对象数组。

4. IntersectionObserver.unobserve()

   使 IntersectionObserver 停止监听特定目标元素。

## 懒加载实现

```js
// <img :src="require(`@/assets/loading.gif`)"
//            :data-src="index"
//            class="imgs"
//            v-for="(item, index) in imgList"
//            :key="index">


const THAT = this
const io = new IntersectionObserver(
  (entries: any) => {
    entries.forEach((item: any) => {
      const target = item.target
      const index = target.getAttribute('data-src')
      if (item.isIntersecting) {
        target.src = require(`@/assets/${THAT.imgList[index]}`)
        io.unobserve(target)  //已加载 取消监听
      }
    })
  },{
    root: document.querySelector('#swiperBox'),
    rootMargin: '50px 0px 50px 0px'
  }
)

const imgs = document.querySelectorAll('.imgs')
imgs.forEach(item => {
  io.observe(item)
})
```
