// 如果想知道es6一些语法怎么实现,可以在babel那个网站转换成es5的语法
var names = ["abc", "cba", "nba"]
// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]

// 对数组的解构: []
var [item1, item2, item3] = names
console.log(item1, item2, item3)

// 解构后面的元素
var [, , itemz] = names
console.log(itemz)

// 解构出一个元素,后面的元素放到一个新数组中, 这里不是展开运算符, 而是结构的一种语法
var [itemx, ...newNames] = names
console.log(itemx, newNames)

// 解构的默认值, 默认为undefined
var [itema, itemb, itemc, itemd = "aaa"] = names
console.log(itemd)
