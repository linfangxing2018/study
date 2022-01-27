function Person() {

}

// console.log(Person.prototype)
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

console.log(Person.prototype.__proto__)  // __proto__存在浏览器兼容性
console.log(Person.prototype.__proto__.__proto__)

// 对Object.prototype 不起效, 可能是 里面的set方法重写了

