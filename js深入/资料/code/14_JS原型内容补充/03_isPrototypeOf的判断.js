function Person() {

}

var p = new Person()

console.log(p instanceof Person)
console.log(Person.prototype.isPrototypeOf(p))

// 
var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj)
// 区别 
// console.log(info instanceof obj)  // instanceof要求右边是一个构造函数, 这样调用回报错
console.log(obj.isPrototypeOf(info))
