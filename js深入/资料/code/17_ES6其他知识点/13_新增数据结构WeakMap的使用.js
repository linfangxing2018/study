
let obj = {name: "obj1"}
// 1.WeakMap和Map的区别二:
const map = new Map()
map.set(obj, "aaa")
console.log(map.get(obj))


const weakMap = new WeakMap()
weakMap.set(obj, "aaa")

// 2.区别一: 不能使用基本数据类型
// weakMap.set(1, "ccc")

// 3.常见方法
// get方法
console.log(weakMap.get(obj))

// has方法
console.log(weakMap.has(obj))

// delete方法
console.log(weakMap.delete(obj))
// console.log打印一个对象的时候，会转成字符串，如果对象是不能遍历的(比如weakMap)会转成字符串打印出WeakMap { <items unknown> }
console.log(weakMap)  // WeakMap { <items unknown> }
