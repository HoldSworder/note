模块化标准主要有  1.AMD规范 2.CMD规范

1.AMD：异步模块定义,基于requireJS
2.CMD：通用模块定义,基于SeaJS

区别：
	1.AMD推崇依赖前置，在定义模块的时候就要声明依赖的模块。
	2.CMD推崇就近依赖，只有在用到某个模块的时候再去调用。

模块化：由于代码逻辑越来越多，将逻辑相近的代码放到一起组成一个模块，解决了命名空间等许多问题，提高了开发效率以及可维护性。