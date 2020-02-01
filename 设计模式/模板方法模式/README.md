# 模版方法模式

在继承的基础上，在父类定义好执行的算法

```js
public abstract class Beverage{    //饮料抽象类
    init():void{    //模板方法
        this.boilWater()
        this.brew()
        this.pourInCup()
        this.addCondiments()
    }

    boilWater():void{    //具体方法
       console.log("把水煮沸")
    }

    abstract  brew():void    //抽象方法brew
    abstract  addCondiments():void        //抽象方法addCondiments
    abstract pourInCup():void    //抽象方法pourInCup
}

public class Coffee extends Beverage{    //Coffee类
     brew():void{    //子类中重写brew方法
        console.log("用沸水冲泡咖啡")
    }
     pourInCup():void{    //子类中重写pourInCup方法
        console.log("把咖啡倒进杯子")
    }
     addCondiments():void{    //子类中重写addCondiments方法
        console.log("加糖和牛奶")
    }
}

public class Tea extends Beverage{    //Tea类
    brew():void{    //子类中重写brew方法
        console.log("用沸水浸泡茶叶")
    }

    pourInCup():void{    //子类中重写pourInCup方法
        console.log("把茶倒进杯子")
    }

    addCondiments():void{    //子类中重写addCondiments方法
        console.log("加柠檬")
    }
}
Beverage coffee = new Coffee()    // 创建coffee对象
coffee.init()     // 把水煮沸、用沸水冲泡咖啡、把咖啡倒进杯子、加糖和牛奶
Beverage tea = new Tea()    // 创建tea对象
tea.init()       // 把水煮沸、用沸水浸泡茶叶、把茶倒进杯子、加柠檬
```

## 钩子方法

```js
 class Beverage {
    init(): void {
        this.boilWater()
        this.brew()
        this.pourInCup()
        if (this.customerWantsCondiments() ){ // 如果挂钩返回true，则需要调料
            this.addCondiments();
        }
    }

    boilWater(): void {
        console.log("把水煮沸")
    }

    brew() {
        throw new Error('子类必须重写brew方法')
    }

    pourInCup() {
        throw new Error('子类必须重写pourInCup方法')
    }

    customerWantsCondiments ():boolean {
        return true
     }
     addCondiments() {
         throw new Error('子类必须重写addCondiments方法')
     }
}

 class Coffee extends Beverage {
    brew() {
        console.log("用沸水冲泡咖啡")
    }

    pourInCup(){
        console.log("把咖啡倒进杯子")
    }

     customerWantsCondiments() {
         return window.confirm( '请问需要调料吗？' );
    }
     addCondiments() {
         console.log( '加糖和牛奶' );
     }
}

Coffee coffee = new Coffee()
coffee.init()
```
