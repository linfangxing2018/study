var jsString = 'var message = "Hello World"; console.log(message);'

// var message = "Hello World"  // 像这种代码js引擎优化会进行优化提高运行效率, 但是对于上面那种一般不会优化
// console.log(message)

eval(jsString) // 要经过js解析器, 解析成机器码
