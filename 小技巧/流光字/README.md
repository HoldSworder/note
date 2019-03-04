```css
  h3, p{
    background-image: -webkit-linear-gradient(left, blue, red 25%, blue 50%, red 75%, blue 100%);
    /* 在文字后设置渐变背景 首尾一致做到无缝流转 */
    -webkit-background-clip: text;
    /* 将图片根据文字进行裁剪 */
    color: transparent;
    /* 将字体变为透明，就可以显示背景图了 */
    background-size: 200% 100%;
    /* 将背景图设为两倍宽度 这样才有空间移动 */
    animation: streamer 5s infinite linear;
    /* 5s周期 无限次数播放 */
  }
  @keyframes streamer {
    0%  {
        background-position: 0 0;
    }
    100% {
        background-position: -100% 0;
    }
}
```