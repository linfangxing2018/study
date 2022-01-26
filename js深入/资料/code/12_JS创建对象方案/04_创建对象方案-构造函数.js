// 规范: 构造函数的首字母一般是大写
function Person(name, age, height, address) {
  // 首先会在内存新创建一个 {}, 并把this指向这个空对象, 最后会返回这个对象
  this.name = name
  this.age = age
  this.height = height
  this.address = address

  this.eating = function() {
    console.log(this.name + "在吃东西~")
  }

  this.running = function() {
    console.log(this.name + "在跑步")
  }
}


var p1 = new Person("张三", 18, 1.88, "广州市")
var p2 = new Person("李四", 20, 1.98, "北京市")

console.log(p1)   // 打印出来是 Person,不像工厂模式那样都是Object, 你说那种类型 String, Function是不是也是有构造函数构造出来的
console.log(p2)
p1.eating()
p2.eating()
// class 其实是构造函数的语法糖