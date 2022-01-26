function foo() {
  console.log(this)
}

// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")

// 默认绑定和显示绑定bind冲突: 优先级(显示绑定)

var newFoo = foo.bind("aaa")  // bind返回一个函数, 传参跟call一样

newFoo()
newFoo()
newFoo()
newFoo()
newFoo()
newFoo()

var bar = foo
console.log(bar === foo) // true
console.log(newFoo === foo) // false
