# 组合模式

将对象组合成树形结构以表示‘部分-整体’的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

```html
//虚拟dom
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      div {
        border: 1px solid red;
      }
      p {
        border: 1px solid blue;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let vnode = {
        type: 'div',
        attrs: {
          id: 'div2',
          className: 'container'
        },
        children: [
          {
            type: 'p',
            attrs: {},
            children: ['123']
          },
          {
            type: 'p',
            attrs: {},
            children: ['456']
          }
        ]
      }
      function render(vnode, parent) {
        let element
        if (typeof vnode == 'object') {
          let { type, attrs, children = [] } = vnode
          element = document.createElement(type)
          for (let attr in attrs) {
            if (attr == 'className') {
              element.setAttribute('class', attrs[attr])
            } else {
              element.setAttribute(attr, attrs[attr])
            }
          }
          for (let child of children) {
            render(child, element)
          }
        } else {
          element = document.createTextNode(vnode)
        }
        parent.appendChild(element)
      }
      render(vnode, document.getElementById('root'))
    </script>
  </body>
</html>
```

```js
let closeDoorCommand = {
  execute: function() {
    console.log('关门')
  }
}
let openPcCommand = {
  execute: function() {
    console.log('开电脑')
  }
}
let openQQCommand = {
  execute: function() {
    console.log('登录QQ')
  }
}
let MacroCommand = function() {
  return {
    commandsList: [],
    add: function(command) {
      this.commandsList.push(command)
    },
    execute: function() {
      for (let i = 0, command; (command = this.commandsList[i++]); ) {
        command.execute()
      }
    }
  }
}
let macroCommand = MacroCommand()
macroCommand.add(closeDoorCommand)
macroCommand.add(openPcCommand)
macroCommand.add(openQQCommand)
macroCommand.execute()
```
