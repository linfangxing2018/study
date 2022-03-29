
// 简单版
class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend() {
    if (activeReactiveFn) {
      this.reactiveFns.push(activeReactiveFn)
    }
  }
  notify() {
    this.reactiveFns.forEach(item => {
      item()
    })
  }
}
// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend对象
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}
const reactive = (obj) => {
  return new Proxy(obj, {
    get: function(target, key, receiver) {
      console.log(1234)
      // 根据target.key获取对应的depend
      const depend = getDepend(target, key)
      // 给depend对象中添加响应函数
      depend.addDepend(activeReactiveFn)
  
      return Reflect.get(target, key, receiver)
    },
    set: function(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      // depend.notify()
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}
let activeReactiveFn = null
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}
let obj = {
  name: 'lin'
}
// 代理的对象才是响应式的，操作代理对象， 改变代理对象的值，原对象的值也会发生改变
// 我们之后的操作都是直接对Proxy的操作，而不是原有的对象，因为我们需要在handler里面进行侦听
// 也就是说，如果我们希望监听一个对象的相关操作，那么我们可以先创建一个代理对象（Proxy对象）；
// 之后对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作
// 跟vue2不同，vue2直接是监听原来对象
const reactive1  = reactive(obj)
const change = () => {
  console.log('输出为obj:', obj.name)

  console.log('输出为:', reactive1.name)
}
watchFn(change)
console.log(reactive1)
reactive1.name = 'jin'


