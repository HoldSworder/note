# img 元素 3px 空隙问题

当div元素包裹img元素时 img元素会有3px的空隙

## 出现原因

img 是一种类似 text 的元素，在结束的时候，会在末尾加上一个空白符，所以就会多出 3px。

## 解决方法

1. 设置图片

```css
img {
  display: block;
}
```

2. 设置父元素

```css
div {
  font-size: 0px;
}
```

3. 设置父元素高度

4. 设置 img

```css
img {
  vertical-align: top;
}
```
