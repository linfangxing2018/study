const s1 = Symbol()
const s2 = Symbol()

const obj = {
  name: "why",
  friend: {
    name: "kobe"
  },
  // 弊端1: 不支持函数对象
  foo: function() {
    console.log("foo function")
  },
  // 不支持对象
  [s1]: "abc",
  s2: s2
}
// 不支持循环引用
obj.inner = obj

const info = JSON.parse(JSON.stringify(obj))
console.log(info === obj)
obj.friend.name = "james"
console.log(info)
