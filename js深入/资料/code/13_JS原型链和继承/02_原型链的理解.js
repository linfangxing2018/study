var obj = {
  name: "why",
  age: 18
}

// 当我们在一个对象访问一个属性的时候会触发[[get]]操作
// 1.在当前的对象中查找属性
// 2.如果没有找到, 这个时候会去原型链(__proto__)对象上查找
// __proto__存在兼容性问题
obj.__proto__ = {
}

// 原型链
obj.__proto__.__proto__ = {
  
}

obj.__proto__.__proto__.__proto__ = {
  address: "上海市"
}

console.log(obj.address)




// 面试题
// 说一下原型链和原型链的继承吧
// 其实[[prototype]]和__proto__意义相同,都是隐式原型,均表示对象的内部属性，其值指向对象原型。前者在一些书籍、规范中表示一个对象的原型属性，后者则是在浏览器实现中指向对象原型。

// 回答
// JavaScript当中每个对象都有一个特殊的内置属性[[prototype]]，这个特殊的对象可以指向另外一个对象。(原型的概念)

// 那么这个对象有什么用呢？
// 当我们通过引用对象的属性key来获取一个value时，它会触发[[Get]]的操作；
// 这个操作会首先检查该对象是否有对应的属性，如果有的话就使用它；
// 如果对象中没有改属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性；

// 通过对象的__proto__ 属性可以获取到（但是这个是早期浏览器自己添加的，存在一定的兼容性问
// 题）；
// p方式二：通过Object.getPrototypeOf 方法可以获取到

// 所有的函数都有一个prototype的属性：
// 我们前面讲过new关键字的步骤如下：
// 在内存中创建一个新的对象（空对象）；
// 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性
// 那么也就意味着我们通过Person构造函数创建出来的所有对象的[[prototype]]属性都指向Person.prototype：

function Person(name) {
  this.name = name;
}
console.log(Person,'22222')
console.log(Person.prototype.constructor === Person)  // true
// 默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象；
  

