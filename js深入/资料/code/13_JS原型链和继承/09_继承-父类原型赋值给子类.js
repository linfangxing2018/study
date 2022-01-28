// 父类: 公共属性和方法
function Person(name, age, friends) {
  // this = stu
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eating = function() {
  console.log(this.name + " eating~")
}

// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)
  // this.name = name
  // this.age = age
  // this.friends = friends
  this.sno = 111
}

// 直接将父类的原型赋值给子类, 作为子类的原型, 从面向对象的角度来说这种方案是不正确的, 给子类添加方法, 父类也存在
Student.prototype = Person.prototype

Student.prototype.studying = function() {
  console.log(this.name + " studying~")
}


// name/sno
var stu = new Student("why", 18, ["kobe"], 111)
console.log(stu)
stu.eating()


// function Doctor(name) {
//   this.name = name
//   function study() {
//     console.log('我是医生我爱学习')
//   }

// }
// var lin = new Doctor()
// console.log(Doctor.prototype,'111111111')
// console.log(lin,'123')
