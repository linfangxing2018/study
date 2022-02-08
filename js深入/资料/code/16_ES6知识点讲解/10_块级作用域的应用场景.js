const btns = document.getElementsByTagName('button')

// 这种写法有弊端, 没有形成形成作用域, 访问的都是全局作用域的 i, 点击都是打印4
// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     console.log("第" + i + "个按钮被点击")
//   }
// }

// 以前没有块级作用域使用 函数作用域的技巧来实现
// for (var i = 0; i < btns.length; i++) {
//   (function(n) {
//     btns[i].onclick = function() {
//       console.log("第" + n + "个按钮被点击")
//     }
//   })(i)
// }

// console.log(i)

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    console.log("第" + i + "个按钮被点击")
  }
}

// console.log(i)
