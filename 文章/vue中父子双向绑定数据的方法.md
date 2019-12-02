# vue 中父子双向绑定数据的方法

## 父向子

动态 props 的方法实现

```html
//父
<login :dialongShow="dialongShow"></login>

//子 
@Prop() dialongShow: boolean;
```

## 子向父

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
