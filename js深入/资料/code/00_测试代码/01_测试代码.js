// 你不知道的JavaScript
function foo(el) {
  console.log(el,this.id)
}

var obj = {
  id:'awesome'
}

var nums = [1,2,3]
nums.forEach(foo, obj) // 第二个参数为this绑定的对象
nums.forEach(foo) // this指向window
// 1 awesome
// 2 awesome
// 3 awesome
// 1 undefined
// 2 undefined
// 3 undefined
