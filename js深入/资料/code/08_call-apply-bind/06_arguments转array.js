function foo(num1, num2) {
  // 1.自己遍历
  // var newArr = []
  // for (var i = 0; i < arguments.length; i++) {
  //   newArr.push(arguments[i] * 10)
  // }
  // console.log(newArr)

  // 2.arguments转成array类型
  // 2.1.自己遍历arguments中所有的元素

  // 2.2.Array.prototype.slice将arguments转成array
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)

  var newArr3 = [].slice.call(arguments)
  console.log(newArr3)

  // 2.3.ES6的语法
  var newArr4 = Array.from(arguments)  // 鼠标移上去查看用法, 传入一个可迭代的或者数组
  console.log(newArr4)
  var newArr5 = [...arguments] // 展开运算符
  console.log(newArr5)
}

foo(10, 20, 30, 40, 50)


// 额外补充的知识点: Array中的slice实现
// Array.prototype.hyslice = function(start, end) {
//   var arr = this  // 不改变的话是隐式绑定, 看40行
//   start = start || 0
//   end = end || arr.length
//   var newArray = []
//   for (var i = start; i < end; i++) {
//     newArray.push(arr[i])
//   }
//   return newArray 
// }

// var newArray = Array.prototype.hyslice.call(["aaaa", "bbb", "cccc"], 1, 3) // call改变this的指向, 使this指向["aaaa", "bbb", "cccc"]
// console.log(newArray)

// var names = ["aaa", "bbb", "ccc", "ddd"]
// names.slice(1, 3)  // 截取数组

