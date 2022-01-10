
/*
  js中集合是 Set , 无序且唯一
*/

// 去重
const arr = [1, 2, 3, 3]
const arr2 = [...new Set(arr)]   // ... 展开运算符,    将集合转换成数组

// 判断某元素是否在集合里面
const arr3 = new Set([1, 2, 3])
const a = arr3.has(4)


// 交集
const arr4 = [1, 2, 3]
const arr5 = [1, 2]
const arr6 = arr4.filter(item => new Set(arr5).has(item))
// 也可以这样
// const arr6 = arr4.filter(item => arr5.includes(item))
// 题号349 


let mySet = new Set()
let o = {a: 1, b: 2}
mySet.add(1)
mySet.add(1)
mySet.add(o)
mySet.add({a: 1, b: 2})
mySet.add('linfangxing')

mySet.delete(o)
mySet.delete(1)
console.log(mySet.size)
mySet.has(1)

// 遍历集合
for (let item of mySet) console.log(item)
for (let item of mySet.values()) console.log(item)
for (let item of mySet.keys()) console.log(item)
for (let [key, value] of mySet.entries()) console.log(key, value)   // key, value是一样的

// 集合转换成数组
let myArr = [...mySet]
// let myArr = Array.from(mySet)

// 数组转换成集合
let myArrSet = [1,2,3]
myArrSet = new Set(myArr)


// 求差值 
const arr6 = arr4.filter(item => !new Set(arr5).has(item))






