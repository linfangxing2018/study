
function Foo(name) {
  this.name = name
  this.eating = function() {   // 这个并不是在prototype上面
    console.log('我再吃东西西')
  }
}
Foo.prototype.study = function() {
  console.log('lalalal')
}
var a = new Foo()
a.eating()
console.log(Foo.prototype.eating)
