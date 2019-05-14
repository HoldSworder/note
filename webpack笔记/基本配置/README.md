# 基本配置

npm init -y 初始化npm

npm i webpack-cli webpack -D

在 webpack4.0 中存在默认配置

可在根目录新建 webpack.config.js 文件覆盖默认配置

## 总体

```js
const path = `require`('path')

module.exports = {
  //入口文件的配置项
  entry: {},
  //出口文件的配置项
  output: {},
  //模块：例如解读CSS,图片如何转换，压缩
  module: {},
  //插件，用于生产模版和各项功能
  plugins: [],
  //配置webpack开发服务功能
  devServer: {}
}
```

1. 出入口配置

```js
//入口文件的配置项
entry:{
    //里面的entery是可以随便写的
    entry:'./src/entry.js'
},

//出口文件的配置项
output:{
    //打包的路径文职
    path:path.resolve(__dirname,'dist'),
    //打包的文件名称
    filename:'bundle.js'

},
```

### 多出入口

```js
 //入口文件的配置项
  entry:{
      entry:'./src/entry.js',
      //这里我们又引入了一个入口文件
      entry2:'./src/entry2.js'
  },
  //出口文件的配置项
  output:{
      //输出的路径，用了Node语法
      path:path.resolve(__dirname,'dist'),
      //输出的文件名称
      filename:'[name].js'
  }
```

2. 配置热更新

安装 **webpack-dev-server**

```js
//webpack
devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:1717
    }

//package.json
"scripts": {
    "server":"webpack-dev-server"
 },
```

3. css 文件打包

安装**style-loader**和**css-loader**

配置 loader

```js
//入口js中导入css
import icss from './css/index.css'
```

```js
module:{
        rules: [
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
          ]
    },
```

4. 配置 html 文件

安装**html-webpack-plugin**插件

```js
//webpack.config.js
const htmlPlugin= `require`('html-webpack-plugin')


plugins:[
         new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'

        })
    ],

//minify：是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
//hash：为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
//template：是要打包的html模版路径和文件名称。
```

5. css 的图片处理

安装**file-loader**和**url-loader**

```js
//webpack.config.js
module: {
  rules: [
    {
      test: /\.(png|jpg|gif)/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 500000,
            outputPath: 'images/'
          }
        }
      ]
    }
  ]
}
//test:/.(png|jpg|gif)/是匹配图片文件后缀名称。
//use：是指定使用的loader和loader的配置参数。
//limit：是把小于500000B的文件打成Base64的格式，写入JS。
//outputPath: 打包到指定路径下
```

6. html 中的 img 图片引入

安装**html-withimg-loader**

```js
{
    test: /\.(htm|html)$/i,
     use:[ 'html-withimg-loader']
}
```

7. less、sass、stylus

安装相应 loader 写进 module 的 rules 中

8. 配置 babel

安装 babel 相应包

babel-core babel-loader babel-preset-env

```js
//webpack.config.js
{
    test:/\.(js)$/,
    use:{
        loader:'babel-loader',
        options:{
            presets:[
                "env"
            ]
        }
    },
    exclude:/node_modules/
}

//可以在根目录新建.babelrc文件覆盖配置选项 （option）
```

9. 全局引入第三方库

```js
//webpack.config.js
const webpack = require('webpack')

plugins: [
  new webpack.ProvidePlugin({
    $: 'jquery'
  })
]

//ProvidePlugin是webpack自带的插件
```

10. 打包拆分第三方库

```js
//修改入口文件 给入口文件单独命名
optimization:{  //优化
        splitChunks:{
            cacheGroups:{//缓存组，一个对象。它的作用在于，可以对不同的文件做不同的处理
                commonjs:{
                    name:'vender',      //输出的名字（提出来的第三方库）
                    test: /\.js/,       //通过条件找到要提取的文件
                    chunks:'initial'    //只对入口文件进行处理
                }
            }
        }
    }
```

# 最终 config 代码

```js
const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js' //分开第三方模块 所以要给入口文件单独命名
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js' //以key做为输出的名字
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: 1717
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'jquery',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
}
```
