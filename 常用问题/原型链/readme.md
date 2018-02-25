三种方法

  // 第一种方式：字面量
  var o1 = {name: 'o1'};
  var o2 = new Object({name: 'o2'});

  // 第二种方式：构造函数
  var M = function (name) { this.name = name; };
  var o3 = new M('o3');

  // 第三种方式：Object.create
  var p = {name: 'p'};
  var o4 = Object.create(p);

  区别：new创建可以利用构造函数 create只能通过对象创建

原型链

  通过在构造函数的prototype上添加方法 可使所有共用该原型链的实例一起添加
  M.prototype.say = function () {
          console.log('say hi');
      };
      var o5 = new M('o5');

  此处无论是上面的o3还是o5都有say方法

  顶层是object.prototype
