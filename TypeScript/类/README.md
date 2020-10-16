# 类

## 关键字

* public: 类的内外部均可访问
* private: 只允许类的内部访问
* protected: 允许类的内部及子类访问

## 构造函数

子类继承父类 涉及构造函数 必须加上super()

## 抽象类

继承于抽象类的类 需要实现抽象类中定义的方法

```ts
abstract class aa {
  abstract skill()
}

class bb extends aa {
  skill() {}
}

class cc extend aa {
  // skill() {}  //worry
}
```
