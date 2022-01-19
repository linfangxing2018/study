function foo() {
  var name = "why"
  var age = 18  // ECMA规范中,AO对象没被销毁时,里面的属性也不会被销毁,但是js引擎为了提高性能,会把一些没有用到的属性给删除, 比如这个age

  function bar() {
    debugger
    console.log(name)
    // console.log(age)
  }

  return bar
}

var fn = foo() // 一个函数被调用多次会在堆内存创建多个不同的AO对象
fn()
fn = null // 释放内存
// foo = null // 如果foo对象被释放了, 则无法访问这个函数对象, 所占的内存过了一段时间会被GC回收
var baz = foo()
baz()


// 浏览器每一个tab标签页都是独立的进程, 不会相互干扰

