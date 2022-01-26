"use strict";  // 在严格模式下使用with语句会报错

var message = "Hello World"
// console.log(message)

// with语句: 可以形成自己的作用域
var obj = {name: "why", age: 18, message: "obj message"}

function foo() {
  function bar() {
    with(obj) {   // 首先在with这个作用域里面查找, 再一层一层往上查找
      console.log(message)
      console.log("------")
    }
  }
  bar()
}

foo()

var info = {name: "kobe"}
with(info) {
  console.log(name)
}

// 很久以前的vue源码中也有地方使用了with语句, 然后传入一个对象, 里面使用的变量会先去这个对象里面查找