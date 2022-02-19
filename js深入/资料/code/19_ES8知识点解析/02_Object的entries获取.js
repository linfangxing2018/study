const obj = {
  name: "why",
  age: 18
}
// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链(继承)中的属性）。
console.log(Object.entries(obj))  // [['name', "why"], ['age', 18]]
const objEntries = Object.entries(obj)
objEntries.forEach(item => {
  console.log(item[0], item[1])
})

console.log(Object.entries(["abc", "cba", "nba"]))
console.log(Object.entries("abc"))

