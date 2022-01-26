function foo() {
  // var obj = {}   构造函数内部操作
  // Object.__proto__ = foo.prototype   new的第二步操作, 把函数的显式原型赋值给对象的隐式原型
}

// 函数也是一个对象
// console.log(foo.__proto__) // 函数作为对象来说, 它也是有[[prototype]] 隐式原型

// 函数它因为是一个函数, 所以它还会多出来一个显示原型属性: prototype
console.log(foo.prototype)

// 函数可以通过new来进行调用
var f1 = new foo()
var f2 = new foo()

console.log(f1.__proto__ === foo.prototype)
console.log(f2.__proto__ === foo.prototype)
