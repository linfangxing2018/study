// 队列: 先进先出
// js没有队列, 可以使用Array实现

const queue = []
queue.push(1)
queue.push(2)
const item1 = queue.shift()  // 移除数字第一项

// 场景：先进先出(有序性) 
  // 1. 食堂排队打饭
  // 2. JS中的异步队列
  // 3. 计算最近的请求次数 题号 933

  // JS是单线程的, 无法同时处理异步中的并发任务
