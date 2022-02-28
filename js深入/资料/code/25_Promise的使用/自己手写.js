const PROMISE_STATUS_PENDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
  // executor 翻译: 执行
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []
    const resolve = value => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return  // 防止同时调用resolve和reject
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value  // 把参数值传个回调
          this.onFulfilledFns.forEach(fn => {
            console.log(fn,'3333')
            fn(this.value)
          })
        })
      }
    }
    const reject = reason => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return  // 防止同时调用resolve和reject
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => fn(this.reason))
        })
      }
    }
    executor(resolve, reject)
  }
  // then返回的是一个promise对象
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // 如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        console.log(onFulfilled,'22222222222222')
        try {
          const value = onFulfilled(this.value)  
          resolve(value)
        } catch(err) {
          reject(err)
        }
      }
       // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        // console.log(onFulfilled,'11111111111111')
        this.onFulfilledFns.push(() => {
          const value = onFulfilled(this.value)
          console.log(value,'111111111111')
          resolve(value)
        })
        this.onRejectedFns.push(onRejected)
      }
    })
  }
}
// 同步代码
const promise = new MyPromise((resolve, reject) => {
  // reject('DDDD')
  resolve("1234")
})

//都是同步代码会被加入到 onFulfilledFns或者onRejectedFns
promise.then((res) => {
  console.log(res,'第一次')
  return 'aaa'   // 返回的值会被当作新的Promise的resolve值
}).then(res => {
    console.log(res,'第二次')
    // resolve('第二次:', res)
  }
)

// promise.then(res => {
//   console.log("res1:", res)
//   return "aaaa"
//   // throw new Error("err message")
// }, err => {
//   console.log("err1:", err)
//   return "bbbbb"
//   // throw new Error("err message")
// }).then(res => {
//   console.log("res2:", res)
// }, err => {
//   console.log("err2:", err)
// })


// 代码同步执行 
// promise.then((res) => {
//   console.log('res:', res)
// }, (err) => {
//   console.log('第一次err:', err)
// })

// promise.then((res) => {
//   console.log('res:', res)
// }, (err) => {
//   console.log('第二次err:', err)
// })

