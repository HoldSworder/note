module.exports = {
    entry: './a', //入口文件
    output: {       //出口文件
        filename: 'xxx.js',  //出口文件名
        path: __dirname     //出口文件地址  __dirname是node中指向当前地址的变量
    }
}

//配置之后只需要 npm run webpack(webpack地址) 即可 不需要在配置出入口信息