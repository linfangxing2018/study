// 争论: 代码规范 ;   要不要写这个

var obj1 = {
  name: "obj1",
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name: "obj2"
};  // 这里不写 ; 会报错, 解析成这个样子

// var obj2 = {
//   name: "obj2"
// }(obj2.bar = obj1.foo)()

// obj2.bar = obj1.foo
// obj2.bar()

(obj2.bar = obj1.foo)()  //(obj2.bar = obj1.foo)赋值表达式,是一个间接函数引用,返回等号右边的结果,当作是整个()的返回值, 所以是独立函数调用
(obj2.bar)() // 不是赋值表达式, 加不加括号都一样

// 你不知道的JavaScript
function foo(el) {
  console.log(el,this.id)
}

var obj = {
  id:'awesome'
}

var nums = [1,2,3]
nums.forEach(foo,obj)

// function foo(el) {
//   console.log(el,this.id)
// }

// var obj = {
//   id:'awesome'
// }

// [1,2,3].forEach(foo,obj)   // 运行报错, 跟上面一样没有添加 ;


