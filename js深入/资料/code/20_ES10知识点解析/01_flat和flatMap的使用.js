// 以前我们把多维数组扁平化是通过 遍历然后 递归实现
// 1.flat的使用
// const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]
// const newNums = nums.flat()   flat() 参数默认为1, 对数组做一次降维
// console.log(newNums)

// const newNums2 = nums.flat(2)
// console.log(newNums2)

// 2.flatMap的使用  跟map差不多,第二个参数绑定this
// const nums2 = [10, 20, 30]
// const newNums3 = nums2.flatMap(item => {
//   return item * 2
// })
// const newNums4 = nums2.map(item => {
//   return item * 2
// })

// console.log(newNums3)
// console.log(newNums4)

// 3.flatMap的应用场景   比如我们想把字符以空格分隔放到一个新数组里面
const messages = ["Hello World", "hello lyh", "my name is coderwhy"]
// flatMap
const words = messages.flatMap(item => {
  return item.split(" ")
})

console.log(words)


// 如果使用map
const words2 = messages.map(item => {
  return item.split(' ')
})
const words3 = words2.flat()
console.log(words3,'dddd')
