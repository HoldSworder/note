# vue 中父子双向绑定数据的方法

## 1. props/$emit（父子通信）

### 父向子

动态 props 的方法实现

```html
//父
<login :dialongShow="dialongShow"></login>

//子
@Prop() dialongShow: boolean;
```

### 子向父

自定义事件实现

```html
//子
this.$emit("update:dialongShow", false)

//父
<login @update:dialongShow="update"></login>

//修饰符
<login :dialongShow.sync="dialongShow"></login>
==>
<login @update:dialongShow="val => val = dialongShow"></login>
```

## 2. ref与$parent/$children（不推荐使用）

    * ref：如果在普通的DOM元素上使用，引用指向的就是DOM元素，如果在子组件上使用，指向的就是组件实例

    * $parent/$children: 访问父/子实例

## 3. EventBus（兄弟通信）

    ```js
        //新建bus.js
        import Vue from 'vue'
        export default new Vue()

        //子组件a
        // <div @click="goBus"></div>
        import Bus from 'bus'
        goBus() {
          Bus.$emit('xx', 'click')
        }

        //子组件b
        mounted() {
          Bus.$on('xx', data => {
            console.log(data)
          })
        }
    ```

## 4. $attrs/$listeners（祖孙通信）

    * $attrs

    ```js
    //祖父
    <grandparent>
      <parent test="111"></parent>
    </grandparent>

    //父
    <father>
      <child v-bind="$attrs"></child>
    </father>

    //子
    <child>
      mounted() {
        console.log(this.$attrs)  //{test: 111}
      }
    </child>
    ```

    * listeners

    ```js
    //祖父
    <grandparent>
      <parent v-on="{sayName}"></parent>
    </grandparent>

    //父
    <father>
      <child v-on="$listeners">
    </father>
    this.$listeners.sayName() //grandparent

    //子
    this.$listeners.sayName() //grandparent

    ```

## 5. provide / inject (依赖注入)（祖孙通信）

    provide如果不是一个函数，无法传递变量

    ```js
      //祖父
      <grandparent>
        <parent></parent>

        data() {
          return {
            name: 'zu'
          }
        }
        provide() {
          return {
            name1: this.name
          }
        },
      </grandparent>

      //父
      <father>
        <child>

        inject: ['name']
      </father>
      this.name() //zu

      //子
      <child>
        inject: ['name']
      </child>
      this.name() //zu

    ```
