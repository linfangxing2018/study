// "use strict"

var message = "Hello World"
console.log(message)

// 静默错误   严格模式下报错
// true.foo = "abc"


function foo() {
  "use strict";

  true.foo = "abc"
}

foo()
