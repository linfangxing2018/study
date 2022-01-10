function foo() {
  // AO: 销毁
  var name = "foo"
  function bar() {
    console.log("bar", name)
  }

  return bar
}

var fn = foo()
fn()


var name = "why"
function demo() {
  console.log(name)
}


// 可以访问: test就是闭包，广义，可以访问外面的变量，只是不访问而已
// 有访问到: test就是不是闭包，狭义，有没有访问，没有就不是(面试按照这个)
function test() {
  // 1
  // 10000
}
