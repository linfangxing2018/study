// Reflect 可以用来跟 Proxy一起配合使用, 也可以单独使用, 可以查看15.6文件夹中的 81行 
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log("get---------")
    return Reflect.get(target, key)
  },
  set: function(target, key, newValue, receiver) {
    console.log("set---------")
    target[key] = newValue
    // Reflect 返回true或者false 可以知道是否操作成功
    const result = Reflect.set(target, key, newValue)
    if (result) {
    } else {
    }
  }
})

objProxy.name = "kobe"
console.log(objProxy.name)

