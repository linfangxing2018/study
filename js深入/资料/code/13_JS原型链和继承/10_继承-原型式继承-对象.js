var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj)

// 原型式继承函数
function createObject1(o) {
  var newObj = {}
  // getPrototypeOf  获取某个对象的原型
  // setPrototypeOf该方法将指定对象Object.setPrototypeOf()的原型（即内部属性）设置为另一个对象或. [[Prototype]]null
  Object.setPrototypeOf(newObj, o)   // 那时候道格拉斯提出来的时候还没有提供setPrototypeOf, 他用的是下面那种方法来实现  
  return newObj
}

function createObject2(o) {
  function Fn() {}
  Fn.prototype = o
  var newObj = new Fn()
  return newObj
}

// var info = createObject2(obj)
var info = Object.create(obj)   // 现在ECMA标准给我们提供了这个方法,Object.create()方法创建一个新对象，使用现有对象作为新创建对象的原型。
console.log(info)
console.log(info.__proto__)  // 写__proto__是为了调试, 平时开发不要这么写,存在兼容性


