// 在大多数情况下, this都是出现在函数中
// 在全局作用域下
// 浏览器: window(globalObject)
// Node环境: {}    // 这个文件在node中执行的时候, 会把它当作一个模块 modules  
console.log(this)
// console.log(window)

