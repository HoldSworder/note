# build自定义参数

```js
// package.json
node build/build.js params1 params2 params3

// build.js
process.argv.splice(2)[0] //params1
process.argv.splice(3)[0] //params2
process.argv.splice(4)[0] //params3

process.env['whatever'] = process.argv.splice(2)[0]

//webpack.prod.conf.js
new webpack.DefinePlugin({
  'process.env': env,
  'process.whateverrrr': JSON.stringify(process.env['whatever'])
})
```