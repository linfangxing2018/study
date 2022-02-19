const obj = {
  _name: "why",
  get name() {
    return this._name  // 原本这个this指向于obj, 使用代理进行监听的时候, 不能监听到 这个属性的改变, 可以通过receiver改变this指向
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log("get方法被访问--------", key, receiver)
    console.log(receiver === objProxy)
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    console.log("set方法被访问--------", key)
    Reflect.set(target, key, newValue, receiver)
  }
})

// console.log(objProxy.name)
objProxy.name = "kobe"
// set方法被访问-------- name
// set方法被访问-------- _name
