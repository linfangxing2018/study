// const name = "why"
// console.log(name)

// function foo() {
//   console.log("foo")
// }

// foo()

// function outer() {
//   function inner() {
//     var inner = "inner"
//     console.log(inner)
//   }
// }

// outer()


// 断点 + F5调试
let a = 9

function fn() {
  console.log(a)
}
function cn() {
  let a = 15
  fn()
}
cn()

