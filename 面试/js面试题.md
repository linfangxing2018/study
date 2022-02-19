个人觉得带着问题去学习, 可以加深对知识点的理解
### 对象
1. 当我们通过<a id="new">new</a>去调用一个函数时, 和通过的调用到底有什么区别? 
  + 在内存中创建一个新的对象（空对象）；
  + 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；
  + 构造函数内部的this，会指向创建出来的新对象
  + 执行函数的内部代码（函数体代码）
  + 如果构造函数没有返回非空对象，则返回创建出来的新对象

2. new 一个构造函数，如果函数返回 return {} 、 return null 、 return 1 、  return true 会发生什么情况？
  + 如果函数返回一个对象，那么new 这个函数调用返回这个函数的返回对象，否则返回 new 创建的新对象

3.  如何理解原型和原型链
  > JavaScript当中每个对象都有一个特殊的内置属性[[prototype]](隐式原型)，这个特殊的对象可以指向另外一个对象(除了 Object.prototype
  > 那么这个对象有什么用呢？
    > + 当我们通过引用对象的属性key来获取一个value时，它会触发[[Get]]的操作；
    > + 这个操作会首先检查该属性是否有对应的属性，如果有的话就使用它；
    > + 如果对象中没有该属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性
  > 获取的方式有两种：
    > + 通过对象的__proto__ 属性可以获取到（但是这个是早期浏览器自己添加的，存在一定的兼容性问题）；
    > + 通过Object.getPrototypeOf 方法可以获取到, 以及可以通过Object.setPrototypeOf(obj, o)来设置对象的原型
  
  * 原型链
    > JS 中属性的查找：当我们试图引用实例对象的某个属性时，是按照这样的方式去查找的，首先查找实例对象上是否有这个属性，如果没有找到，就去构造这个实例对象的构造函数的prototype 所指向的对象上去查找，如果还找不到，就从这个 prototype 对象所指向的构造函数的prototype 原型对象上去查找,这样逐级查找形似一个链条，且通过 [[Prototype]] 属性链接，所以被称为原型链
    
  ``` js 
    var obj = {
      name: 'lin'
    }
    console.log(obj.__proto__) // {}
  ```

  注意： 所有的函数都有一个prototype的属性(显示原型), 对象没有这个属性,  函数也是一个对象, 所以也有隐式原型
  
  ``` js 
    function foo() {
      console.log('我爱学习')
    }
    console.log(foo)
    console.log(foo.prototype) 
    foo.prototype.constructor === foo  // true
    console.log(foo.prototype.constructor) // [Function: foo] 指向foo函数
    console.log(foo.__proto__)
  ```
4. 函数的prototype上面有什么属性
  * constructor属性
      foo.prototype.constructor === foo  // true
  * [[Prototype]] 属性

5. 继承
  * 原型链继承
    ``` js 
    fooA.prototype = new fooB()
    var stu1 = new fooA()
    var stu2 = new fooB()
    // 弊端
    //1.fooA, 继承的属性是看不到的
    //2. 创建出来两个stu的对象, 直接修改对象上的属性(非引用值), 是给本对象添加了一个新属性, 获取引用, 修改引用中的值, 会相互影响, 因为引用的值保存的是同一个内存地址
    //3. 在前面实现类的过程中都没有传递参数
    ``` 
  * 原型式继承(对象的继承)
    ``` js
      var obj = {
        name: "why",
        age: 18
      }
      // 1. 原型式继承函数
      // getPrototypeOf  获取某个对象的原型
      // setPrototypeOf该方法将指定对象Object.setPrototypeOf()的原型（即内部属性）设置为另一个对象或. [[Prototype]]null
      function createObject1(o) {
        var newObj = {}
        Object.setPrototypeOf(newObj, o)
        return newObj
      }
      createObject1(obj)
      // 2.现在ECMA标准给我们提供了这个方法,Object.create()方法创建一个新对象，使用现有对象作为新创建对象的原型。
      var newObj = Object.create(obj)
      // 3.
      function createObject2(o) {
        function Fn(){}
        Fn.prototype = o
        return new Fn()
      }
    ```
  * 寄生式组合式继承(最终方案)
    ``` js
    function inheritPrototype(SubType, SuperType) {
      SubType.prototype = Object.create(SuperType.prototype)   // 后面创建的对象都是SuperType
      // // 必须设置回正确的构造函数，要不然在会发生判断类型出错
      // SubType.prototype.constructor = SubType;
      Object.defineProperty(SubType.prototype, "constructor", {    // 所以要改变constructor, 让他的指为SubType
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
      })
    }
    function Foo(name) {
      this.name = name;
    }
    Foo.prototype.myName = function () {
      return this.name;
    }
    // 继承属性，通过借用构造函数调用
    function Bar(name, label) {
      Foo.call(this, name);
      this.label = label;
    }
    inheritPrototype(Bar, Foo)
    // 继承方法，创建备份
    // Bar.prototype = Object.create(Foo.prototype);
    // 必须设置回正确的构造函数，要不然在会发生判断类型出错
    //Bar.prototype.constructor = Bar;
    // 必须在上一步之后
    Bar.prototype.myLabel = function () {
      return this.label;
    }
    var a = new Bar("a", "obj a");
    a.myName(); // "a"
    a.myLabel(); // "obj a
    ```

    * es6 中使用class实现继承
    ``` js
      class Person {
        // 接收传递进来的参数
        constructor(name, age){
        }
        running() {
          console.log(this.name + " running~")
        }
         personMethod() {
          console.log("处理逻辑1")
          console.log("处理逻辑2")
          console.log("处理逻辑3")
        }
        static staticMethod() {
          console.log("PersonStaticMethod")
        }
      }
      class Student extend Person {
        constructor(name, age, sno) {
          super(name, age)  // 继承父类的属性
          this.sno = sno
        }
         // 类对父类的方法的重写
        running() {
          console.log("student " + this.name + " running")
        }
        // 重写personMethod方法
        personMethod() {
          // 复用父类中的处理逻辑
          super.personMethod()

          console.log("处理逻辑4")
          console.log("处理逻辑5")
          console.log("处理逻辑6")
        }
        // 重写静态方法
        static staticMethod() {
          super.staticMethod()
          console.log("StudentStaticMethod")
        }
      }
      var stu = new Student("why", 18, 111)
    ```

6. 如果一个构造函数，bind了一个对象，用这个构造函数创建出的实例会继承这个对象的属性吗？为什么？
  > 不会继承，因为根据 this 绑定四大规则，new 绑定的优先级高于 bind 显示绑定，通过 new 进行构造函数调用时，会创建一个新对象，这个新对象会代替 bind 的对象绑定，作为此函数的 this，并且在此函数没有返回对象的情况下，返回这个新建的对象

7. 对象-函数-原型之间的关系
   ``` js
    // 对象里面是有一个__proto__对象: 隐式原型对象

    // Foo是一个函数, 那么它会有一个显示原型对象: Foo.prototype
    // Foo.prototype来自哪里?
    // 答案: 创建了一个函数, Foo.prototype = { constructor: Foo }

    // Foo是一个对象, 那么它会有一个隐式原型对象: Foo.__proto__
    // Foo.__proto__来自哪里?
    // 答案: new Function()  Foo.__proto__ = Function.prototype
    // console.log(Function.prototype === Function.__proto__) // true
    // Function.prototype = { constructor: Function }

    // var Foo = new Function()
   ```

8. 知道 ES6 的 Class 嘛？Static 关键字有了解嘛
  * 
    > es6以前按照构造函数形式创建类，不仅仅和编写普通的函数过于相似，而且代码并不容易理解
    > 在ES6（ECMAScript2015）新的标准中使用了class关键字来直接定义类；
    > 但是类本质上依然是前面所讲的构造函数、原型链的语法糖而已；
    > 所以学好了前面的构造函数、原型链更有利于我们理解类的概念和继承关系；
  * 
    > 类的访静态方法通常用于定义直接使用类来执行的方法，不需要有类的实例，使用static关键字来定义(一般用来封装属于这个类的工具方法)
    > 比如Person.createPerson() 通过类名.的方式去访问比如： Promise.all  

9. 调用一个函数的方式
     * fn()
     * fn.call()
     * fn.apply()
     * fn.bind()
     * new fn()
     * fn``
10. this 
  *  this指向什么, 跟函数所处的位置是没有关系的, this是动态绑定的 
  * this绑定规则: 
    + 默认绑定: 独立函数调用    默认绑定window
    + 隐式绑定: object.fn() object对象会被js引擎绑定到fn函数的中this里面
    + 显式绑定: call/apply/bind在执行函数时,是可以明确的绑定this(apply传参的方式是数组) 
    + [new](#new) 绑定 
  * 规则之外
    + 忽略显式绑定  apply/call/bind: 当传入null/undefined时, 自动将this绑定成全局对象(默认绑定)
    + 间接函数引用
        ``` js
          function foo() {
            console.log(this)
          }
          const obj1 = {
            foo: foo
          }
          const obj2 = {
            age: 17
          };  // 这里一定要写 ;
          (obj2.foo = obj1.foo)()  // 赋值表达式,是一个间接函数引用,返回等号右边的结果,当作是整个()的返回值, 所以是独立函数调用
          (obj2.bar)() // 不是赋值表达式, 加不加括号都一样
        ```
  * this绑定优先级: 
    new绑定 > 显式绑定 > 隐式绑定 > 默认绑定
  * 注意: 
    1.  一些函数的this分析
      + setTimeout函数, this指向的是window(setTimeout内部应该是直接调用函数, 默认绑定)
        ``` js
          var obj = {
            data: [],
            getData: function() {
              // 发送网络请求, 将结果放到上面data属性中
              // 在箭头函数之前的解决方案
              // var _this = this
              // setTimeout(function() {
              //   var result = ["abc", "cba", "nba"]
              //   _this.data = result 
              // }, 2000);
              // 箭头函数之后
              setTimeout(() => {
                var result = ["abc", "cba", "nba"]
                this.data = result
              }, 2000);
            }
          }
          obj.getData()
          // 如果getData也是一个箭头函数，那么setTimeout中的回调函数中的this指向谁呢
          // 会指向window  在vs code中运行调试, 对象中 [[scopes]]保存的是空
        ``` 
      + 监听点击
        ``` js
          const boxDiv = document.querySelector('.box')
          boxDiv.onclick = function() {
            console.log(this)
          }
          // 内部是这样调用boxDiv.onclick(), 所以是隐式绑定
        ```
      + 数组.forEach/map/filter/find
        ``` js 
          var names = ["abc", "cba", "nba"]
          names.forEach(function(item) {
            console.log(item, this)
          }, "abc") // 第二个参数是绑定this的指向, 不传默认指向window
          names.map(function(item) {
            console.log(item, this)
          }, "cba")
        ```
    2. 箭头函数
      + 箭头函数不会绑定this、arguments属性; 会从上层作用域中找到对应的this(一层一层往上找, 直到找到window)
      + 箭头函数不能作为构造函数来使用（不能和new一起来使用，会抛出错误）

11. 手写call/apply/bind
    ``` js 
      // call
      // Funtion.prototype.call
      Funtion.prototype.call = function(thisArg, ...args) {
        thisArg = (thisArg === undefined && thisArg === null) ? window : Object(thisArg)
        const symbolfn = Symbol('fn')
        const result = thisArg[symbolfn](args)
        delete thisArg[symbolfn]
        return result
      }
      function foo() {
        console.log(this)
      }
      foo.mycall('abc', 10, 20, 30)

      // apply
      Function.prototype.mycall = function(thisArg, argArray = []) {
        thisArg = (thisArg === undefined && thisArg === null) ? window : Object(thisArg)
        const symbolfn = Symbol('fn')
        thisArg[symbolfn] = this
        const result = thisArg[symbolfn](...argArray)
        delete thisArg[symbolfn]
        return result
      }
      function foo() {
        console.log(this)
      }
      foo.mycall('abc', [10, 20, 30]) 

      // bind
      Function.prototype.mybind = function(thisArg, ...argArray) {
        thisArg = (thisArg === undefined && thisArg === null) ? window : Object(thisArg)
        const symbolfn = Symbol('fn')
        thisArg[symbolfn] = this
        return function proxyFn(...args) {
          const finalArgs = [...argArray, ...args]
          const result = thisArg[symbolfn](...finalArgs)
          delete thisArg[symbolfn]
          return result
        }
      }
      function foo() {
        console.log(this)
      }
      const foo1 = foo.mybind('abc', 10)
      foo1(20, 30) 
    ```

12. 函数中的arguments是数组吗？类数组转数组的方法了解一下？


### 闭包

1. 闭包是什么？有什么特性？对页面会有什么影响


        一个普通的函数function，如果它可以访问外层作用域的自由变量，那么这个函数就是一个闭包；
        从广义的角度来说：JavaScript中的函数都是闭包；
        从狭义的角度来说：JavaScript中一个函数，如果访问了外层作用域的变量，那么它是一个闭包；
        特点: 
        1. 函数嵌套函数。
        2. 函数内部可以引用外部的参数和变量。
        3. 参数和变量不会被垃圾回收机制回收
        使用：
        1.读取函数内部的变量；
        2.这些变量的值始终保持在内存中，不会在外层函数调用后被自动清除。(ECMA规范中,AO对象没被销毁时,里面的属性也不会被销毁,但是js引擎为了提高性能,会把函数一些没有用到的属性给删除)
        优点：
        1:变量长期驻扎在内存中；
        2:避免全局变量的污染；
        3:私有成员的存在；
        缺点：会造成内存泄露

2. Js 中常见的内存泄漏
     + 意外的全局变量
     + 被遗忘的计时器或回调函数
     + 脱离 DOM 的引用
     + 闭包

3. JS 中的垃圾回收机制
4. 什么是 js 内存泄露
   > 内存泄漏是指一块被分配的内存既不能使用又不能回收，直到浏览器进程结束
   释放内存的方法：赋值为 null

  
  

