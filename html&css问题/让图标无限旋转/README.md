@keyframes xxx 定义动画

animation 调用动画 参数为

animation 动画名 播放时间 循环次数

animation-timing-function 为动画速度曲线 linear为匀速

  @keyframes rotate
    from transform rotate(0deg)
    to transform rotate(360deg)

  .rotate
    animation rotate 1s infinite
    animation-timing-function linear
