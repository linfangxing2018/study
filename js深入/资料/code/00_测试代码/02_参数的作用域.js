var x = 0

// 当函数的参数有默认值时, 会形成一个新的作用域, 这个作用域用于保存参数的值
function foo(x, y = function() { x = 3; console.log(x) }) {
  console.log(x)  // 下面的x会发生的作用域的提升, 但是优先访问 参数
  var x = 2
  console.log(x)
  y()
  console.log(x)
}

foo(0)
console.log(x)

// undefined
// 3
// 2
// 0

f(1)
// 1
// 3
// 2
// 0
