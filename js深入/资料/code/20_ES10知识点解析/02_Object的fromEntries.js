// const obj = {
//   name: "why",
//   age: 18,
//   height: 1.88
// }

// const entries = Object.entries(obj)
// console.log(entries)

// 如果想把entries转回对象
// const newObj = {}
// for (const entry of entries) {
//   newObj[entry[0]] = entry[1]
// }

// 1.ES10中新增了Object.fromEntries方法
// const newObj = Object.fromEntries(entries)

// console.log(newObj)


// 2.Object.fromEntries的应用场景
// 比如有一 url   https://baidu.com?name=why&age=18&height=1.88
const queryString = 'name=why&age=18&height=1.88'
const queryParams = new URLSearchParams(queryString)
console.log(queryParams)  // URLSearchParams {Symbol(query): Array(6), Symbol(context): null}

for (const param of queryParams) {
  console.log(param)
}

const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)
