// 对象的引用赋值
// 使用另外一个模块导出的对象, 那么就要进行导入 require
// const { aaa, bbb } = require("./why.js")
const { name, age, sum } = require("./why.js")
// 最好不要在这个文件改变引用的值, 因为指向的是同一个对象, 如果被其他js文件使用了, 那个值也会改变

// console.log(aaa)
// console.log(bbb)

console.log(name)
console.log(age)
console.log(sum(20, 30))
