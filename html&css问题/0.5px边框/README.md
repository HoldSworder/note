# 0.5px 边框

```stylus
// 0.5px边框
_borderTrans(borderWidth, borderHeight, borderColor) {
  position relative
  height borderHeight
  width borderWidth
  &:after {
    top 0
    left 0
    content ' '
    width borderWidth * 2
    height borderHeight * 2
    border 1px solid borderColor
    position absolute
    -webkit-transform scale(0.5)
    transform scale(0.5)
    -webkit-transform-origin 0 0
    transform-origin 0 0
    box-sizing border-box
  }
}
```
