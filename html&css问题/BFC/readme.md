# BFC

BFC 即 Block Fromatting Context(块级格式化上下文)

简单来说 就是能避免元素浮动带来的影响（如：高度塌陷等）

## 触发方法

- 根元素(<\html>)
- 浮动元素(元素的 float 不是 none)
- 绝对定位元素(元素的 position 为 absolute 或 fixed)
- 行内块元素(元素的 display 为 inline-block)
- 表格单元格(元素的 display 为 table-cell，HTML 表格单元格默认为该值)
- 表格标题(元素的 display 为 table-caption，HTML 表格标题默认为该值)
- display 值为 flow-root 的元素
- overflow 属性的值不为 visible
- 弹性元素(display 为 flex 或 inline-flex 元素的直接子元素)
- 网格元素(display 为 grid 或者 inline-grid 元素的直接子元素)
