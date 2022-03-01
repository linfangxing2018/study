import { name } from './foo.js'  
import { name } from './boo.js'
console.log(name,'0000000000') // Uncaught SyntaxError: Identifier 'name' has already been declared

// 为了防止这种情况
// 我们可以使用默认到导出, 有点类似我们项目中的 services中的写法

// default export {
//   name,
//   age
// }

// import foo from './foo.js'