// 1.案例一:
// var foo = () => {
//   console.log(arguments) // 箭头函数里面没有arguments, 当它发现这里没有就回去上层作用域寻找, 全局作用域中 node有arguments,浏览器环境没有arguments
            //  node有arguments是因为,node把每一个文件都当成一个modules   06js的指向文件夹中的图片, 
// }

// foo()

// 2.案例二:
// function foo() {
//   var bar = () => {
//     console.log(arguments)
//   }
//   return bar
// }

// var fn = foo(123)
// fn()

// 3.案例三:
var foo = (num1, num2, ...args) => {
  console.log(args)
}

foo(10, 20, 30, 40, 50)
