// 从某些角度来说, 开发中如果没有this, 很多的问题我们也是有解决方案
// 但是没有this, 会让我们编写代码变得非常的不方便
var obj100 = {      // 这个对象有点类似于vue 中的那个 export default那个对象, vue中this指向vue实例(可以看一下vue源码), vue中methods不可以使用箭头函数
  name: "why",
  eating: function() {         // 没有this的话就要这样写了 obj.name, 如果以后修改了对象名, 又要替换一遍
    console.log(this.name + "在吃东西")     
  },
  running: function() {
    console.log(this.name + "在跑步")
  },
  studying: function() {
    console.log(this.name + "在学习")
  }
}

var info = {
  name: "why",
  eating: function() {
    console.log(this.name + "在吃东西")
  },
  running: function() {
    console.log(this.name + "在跑步")
  },
  studying: function() {
    console.log(this.name + "在学习")
  }
}

var person = {
  name: "kobe",
  eating: function() {
    console.log(this.name + "在吃东西")
  },
  running: function() {
    console.log(this.name + "在跑步")
  },
  studying: function() {
    console.log(this.name + "在学习")
  }
}

obj100.eating()
obj100.running()
obj100.studying()

