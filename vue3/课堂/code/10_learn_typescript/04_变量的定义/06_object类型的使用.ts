// 对象让他自动推导类型就行 鼠标放在info上可以查看
const info = {
  name: "why",
  age: 18
}

console.log(info.name)

// 最好不要像这么写，访问属性有问题
const info1: object = {
  name: "why",
  age: 18
}

console.log(info1.name)

