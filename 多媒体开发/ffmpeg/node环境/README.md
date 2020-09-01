# node环境下的ffmpeg

## 安装 

```js
npm i ffmpeg-static   // ffmpeg主程序
npm i ffprobe-static  // ffprobe主程序 用于读取多媒体元信息
npm i fluent-ffmpeg   // node操作ffmpeg封装

let ffmpegPath = ffmpegStatic.path
let ffprobePath = ffprobeStatic.path

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)
```

takeScreenshots