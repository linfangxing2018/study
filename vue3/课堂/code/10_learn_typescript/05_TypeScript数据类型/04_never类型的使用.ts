// function foo(): never {
//   // 死循环
//   while(true) {

//   }
// }

// function bar(): never {
//   throw new Error()
// }

// 提前
// 封装一个核心函数
// 比如有人想要多加一个参数 boolean
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log("string处理方式处理message")
      break
    case 'number':
      console.log("number处理方式处理message")
      break
    // case 'boolean':
    //   console.log("boolean处理方式处理message")
    //   break
    // 如果不判断boolean，会走default， 别人就知道 第三个参数也要处理
    default:
      const check: never = message
  }
}

handleMessage("abc")
handleMessage(123)

// 张三
handleMessage(true)


