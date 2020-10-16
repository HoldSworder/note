# 接口

TS 中类型检查关注值的形态，接口作为一种规范，可以用来定义形状和约束，描述对象的类型。

定义的变量比接口少了一些属性是不允许的,多一些属性也是不允许的

可见，赋值的时候，变量的形状必须和接口的形状保持一致。

1. 接口

    ```js
    interface Obj {
      label: string;
    }

    function func(par: Obj) {
      console.log(par.label)
    }

    func({ size: 10, label: 'abc' })
    ```

2. 可选属性

    接口里的属性不全是必须的。有时我们希望不要完全匹配一个形状，那么可以用可选属性：

    ```js
    interface Obj {
      label: string,
      age?: number
    }

    function func(par: Obj) {
      ...
    }

    func({label: 'abc'})  //ok
    func({age: 20}) //error
    ```

    这时仍然不允许添加未定义的属性

3. 只读属性

    在接口中使用**readonly**指定只读属性

    ```js
    interface Obj {
      readonly x: number;
    }
    ```

4. 联合类型

      ```js
      interface RunOptions  {
        program:string
        commandline:string[] | string | (() => string)
      }

      // commandline 是字符串

      var options:RunOptions = {program:"test1",commandline:"Hello"};

      // commandline 是字符串数组
      options = {program:"test1",commandline:["Hello","World"]};

      // commandline 是一个函数表达式
      options = {program:"test1",commandline:()=>{return "**Hello World**";}};

      ```

5. 任意属性
    有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

    ```js
    interface Person {
      name: string;
      age?: number;
      [propName: string]: string; //只允许string
    }

    let tom: Person = {
        name: 'Tom',
        age: 25,  //error
        gender: 'male'
    };
    ```

    需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

6. 方法

```ts
interface aa() {
  say(): string
}
```

7. 限制类

```ts
class Aa implements aa {}
```

8. 接口继承

```ts
interface aa {
  a: string
}

interface bb extends aa {
  b: number;
  cc(): string
}
```
