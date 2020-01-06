# 元素大小以及相对视口位置 getBoundingClientRect

## 语法

element.getBoundingClientRect()

## 值

DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right 和 bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。

```js
const DOMRect = {
  x,
  y,
  width,
  height,
  top,
  right,
  bottom,
  left
}
```
