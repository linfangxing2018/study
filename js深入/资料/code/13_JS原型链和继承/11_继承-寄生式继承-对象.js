// 原型式继承实现的是对象的, 如果想实现构造函数的可以使用寄生式继承
// 如果我们使用原型式继承的话, 每个子对象添加属性或者方法都得一个一个的添加
var personObj = {
  running: function() {
    console.log("running")
  }
}

function createStudent(name) {   // 工厂函数也有一些弊端, 前面讲工厂函数提到过, 比如创建出来的对象没有明确类型
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function() {
    console.log("studying~")
  }
  return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("james")

