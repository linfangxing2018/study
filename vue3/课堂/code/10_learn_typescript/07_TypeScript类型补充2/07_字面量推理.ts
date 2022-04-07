// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

// 

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

// 3. 一开始就限制类型
type Request = {
  url: string,
  method: Method
}
// const options: Request

const options = {
  url: "https://www.coderwhy.org/abc",
  method: "POST"   // 如果不使用断言 的话，把鼠标放上options会发现，这个 method是string类型，可以传别的值， 比如 '123'
} as const  // 2. 字面量推理
// request(options.url, options.method as Method)  // 1. 断言

request(options.url, options.method)

export {}
