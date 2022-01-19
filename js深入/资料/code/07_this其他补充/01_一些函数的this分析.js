// 1.setTimeout
// function hySetTimeout(fn, duration) {
//   fn.call("abc") // 主要是看setTimeout内部是怎么调用的
// }

// hySetTimeout(function() {
//   console.log(this) // window
// }, 3000)

// setTimeout(function() {
//   console.log(this) // window, setTimeout内部是直接调用的传入的函数的,所以是默认绑定
// }, 2000)

// 2.监听点击
const boxDiv = document.querySelector('.box')
boxDiv.onclick = function() {
  console.log(this)
}
// 内部是这样调用boxDiv.onclick(), 所以是隐式绑定

boxDiv.addEventListener('click', function() {
  // 这种内部  fn.call(boxDiv)
  console.log(this)
})
boxDiv.addEventListener('click', function() {
  console.log(this)
})
boxDiv.addEventListener('click', function() {
  console.log(this)
})

// 3.数组.forEach/map/filter/find
var names = ["abc", "cba", "nba"]
names.forEach(function(item) {
  console.log(item, this)
}, "abc") // 第二个参数是绑定this的指向, 不传默认指向window
names.map(function(item) {
  console.log(item, this)
}, "cba")
