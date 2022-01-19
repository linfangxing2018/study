// apply/call/bind的用法 内部其实是c++实现
// js模拟它们的实现? 难度

// 给所有的函数添加一个hycall的方法       
Function.prototype.hycall = function(thisArg, ...args) {  // 剩余参数, 不传值的话默认为 [], 不是类数组,跟arguments不一样
  console.log(Array.isArray(args),'dasfas')  // true
  // 在这里可以去执行调用的那个函数(foo)
  // 问题: 得可以获取到是哪一个函数执行了hycall
  // 1.获取需要被执行的函数
  var fn = this

  // 2.对thisArg转成对象类型(防止它传入的是非对象类型)    当传入null/undefined时, 自动将this绑定成全局对象
  Object
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg): window

  // 3.调用需要被执行的函数
  thisArg.fn = fn  // 隐式绑定
  var result = thisArg.fn(...args) // 展开运算符
  delete thisArg.fn   // 避免在函数添加多余的属性

  // 4.将最终的结果返回出去
  return result
}


function foo() {
  console.log("foo函数被执行", this)
}

function sum(num1, num2) {
  console.log("sum函数被执行", this, num1, num2)
  return num1 + num2
}


// 系统的函数的call方法
foo.call(undefined)
var result = sum.call({}, 20, 30)
// console.log("系统调用的结果:", result)

// 自己实现的函数的hycall方法
// 默认进行隐式绑定
// foo.hycall({name: "why"})
foo.hycall(undefined)
var result = sum.hycall("abc", 20, 30)
console.log("hycall的调用:", result)

// var num = {name: "why"}
// console.log(Object(num))
