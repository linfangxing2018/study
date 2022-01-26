// function foo() {
//   console.log("函数被调用了", this)
// }

// 1.foo直接调用和call/apply调用的不同在于this绑定的不同
// foo直接调用指向的是全局对象(window)
// foo()
// 函数可以直接调用, 也可以用call, apply来调用

// var obj = {
//   name: "obj"
// }

// call/apply是可以指定this的绑定对象
// foo.call(obj)
// foo.apply(obj)
// foo.apply("aaaa")


// 2.call和apply有什么区别?
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3, this)
}

sum.call("call", 20, 30, 40)
sum.apply("apply", [20, 30, 40])

// 3.call和apply在执行函数时,是可以明确的绑定this, 这个绑定规则称之为显示绑定


// 函数的参数过度会导致栈溢出, 栈是有限的