# fs的常用方法

## fs的promise方法

```js
const fsp = require('fs').promises
```

## 方法

1. fs.readdir 读取目录

    ```node
    fs.readdir(path, (err, files) => {})
    ```

2. fs.stat 获取文件信息

    ```node
    fs.stat(path, (err, stats))
    ```

3. 删除文件/文件夹

    * fs.rmdir 删除空文件夹
    * fs.unlink 删除文件
    * 删除有文件的文件夹需要递归删除

4. 创建快捷方式

    fs.symlink(target, path, callback)

    相对目标是相对于链接的父目录

    fs.symlink('./mew', './example/mewtwo', callback)

### stats方法

* stats.isFile() 判断是否是文件
* stats.isDirectory() 判断是否是目录
