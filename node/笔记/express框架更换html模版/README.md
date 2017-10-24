在app.js中设置

先安装ejs

app.engine('.html',ejs.__express)  切换为html模版
app.set('view engine', 'html')