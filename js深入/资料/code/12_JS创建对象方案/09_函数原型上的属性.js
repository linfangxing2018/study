function foo() {

}

// 1.constructor属性
// foo.prototype这个对象中有一个constructor属性
// console.log(foo.prototype)   // 原型上默认可枚举属性为false
// console.log(Object.getOwnPropertyDescriptors(foo.prototype))   // 获取所有属性

// Object.defineProperty(foo.prototype, "constructor", {
//   enumerable: true,
//   configurable: true,
//   writable: true,
//   value: "哈哈哈哈"
// })

// console.log(foo.prototype)

// prototype.constructor = 构造函数本身
// console.log(foo.prototype.constructor) // [Function: foo] 指向foo函数
// console.log(foo.prototype.constructor.name) // 拿到函数的名字, 可以通过 函数名.name拿到函数名字

// console.log(foo.prototype.constructor.prototype.constructor.prototype.constructor)

// 2.我们也可以添加自己的属性  但是一个一个的添加很麻烦
// foo.prototype.name = "why"
// foo.prototype.age = 18
// foo.prototype.height = 18
// foo.prototype.eating = function() {

// }

var f1 = new foo()
console.log(f1.name, f1.age)


// 3.直接修改整个prototype对象
foo.prototype = {
  // constructor: foo,  这样写可枚举属性默认为true
  name: "why",
  age: 18,
  height: 1.88
}

var f1 = new foo()

console.log(f1.name, f1.age, f1.height)

// 真实开发中我们可以通过Object.defineProperty方式添加constructor
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})


