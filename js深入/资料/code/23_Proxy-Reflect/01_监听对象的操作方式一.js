const obj = {
  name: "why",
  age: 18
}

// Object.defineProperty(obj, "name", {
//   get: function() {
//     console.log("监听到obj对象的name属性被访问了")
//   },
//   set: function() {
//     console.log("监听到obj对象的name属性被设置值")
//   }
// })


Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`监听到obj对象的${key}属性被访问了`)
      return value   // 如果重写这个方法不返回值, 默认返回undefined
    },
    set: function(newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`)
      // obj[key] = newValue  死循环
      value = newValue
    }
  })
})

obj.name = "kobe"
obj.age = 30

console.log(obj.name,'ddd')
console.log(obj.age,'ccc')

obj.height = 1.88
