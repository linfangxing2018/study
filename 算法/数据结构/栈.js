// 栈: 一种后进先出的数据结构
// javascript没有栈, 但是可以使用Array实现栈的所有功能
const stack = []
stack.push(1)
stack.push(2)
const item1 = stack.pop() // 移除数组最后一项
const item2 = stack.pop()

// 什么时候使用栈
// 1. 后进先出  比如: 判断十进制转二进制, 判断字符串的括号是否有效, 函数调用栈(最后调用的函数最先执行完)等

// 栈顶元素就是最后一个

