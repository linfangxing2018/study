// 1. 3种状态
const PROMISE_STATUS_PEDDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PEDDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onrejectedFns = []
    const resolve = (value) => {
      // 防止同时调用resolve, reject
      queueMicrotask(() => {
        if (this.status === PROMISE_STATUS_PEDDING) {
          if (this.status !== PROMISE_STATUS_PEDDING) return
          this.value = value
          this.status = PROMISE_STATUS_FULFILLED
          this.onFulfilledFns.forEach(fn => fn(this.value))
        }
      })
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PEDDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PEDDING) return
          this.reason = reason
          this.status = PROMISE_STATUS_REJECTED
          this.onrejectedFns.forEach(fn => fn(this.reason))
        })
      }
    }
    try {
      executor(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }
  catch(onrejected) {
    this.then(undefined, onrejected)
  }
  then(onfulfilled, onrejected) {
    return new MyPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_PEDDING) {
        if (onfulfilled) {
          this.onFulfilledFns.push(() => {
            try {
              const value = onfulfilled(this.value)      // 如果一个函数不返回值, 默认返回undefined
              resolve(value)
            } catch(err) {
              reject(err)
            }
          })
        }
        if (onrejected) {
          this.onrejectedFns.push(() => {
            try {
              const reason = onrejected(this.reason)
              reject(reason)
            } catch(err) {
              reject(err)
            }
          }) 
        }
      }
      
      if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
        try {
          const value = onfulfilled(this.value)  
          resolve(value)
        } catch(err) {
          reject(err)
        }
      } 
      if (this.status === PROMISE_STATUS_REJECTED && onrejected) {
        try {
          const value = onrejected(this.reason)  
          reject(value)
        } catch(err) {
          reject(err)
        }
      } 
    })
  }
}

// 2.
const promise = new MyPromise((resolve, reject) => {
  resolve('lalalala')   //这部分代码会立即执行, 因为then在后面调用所以用异步queueMicrotask
  // reject('222222222')
  // throw new Error('噢, 出错了')
})

// 普通调用then, 这些都是同步代码, 回调函数作为参数
// promise.then(res => {
// // 回调函数还没调用, 在MyPromise进行调用
//   console.log(res,'第一次')
//   return 'aaaaa'   // 函数返回的值当作下一个的参数
// }, err => {
//   console.log(err,'第一次错误')
// }).then(res => {
//   console.log(res, '第一次链式调用')  
// }).then(res => {
//   console.log(res, '第二次链式调用')
// })

// 支持多次调用
promise.then(res => {
  console.log(res,'第二次')
}, err => {
  console.log(err,'第二次错误')
})
// 运行, 里面有微任务, 先运行微任务再运行下面代码, 这个时候状态已经改变


// 如果调用then之前, 状态已经改变  
// 在确定Promise状态之后, 再次调用then
// 异步代码
setTimeout(() => {
  promise.then(res => {
    console.log("res:", res)
  }, err => {
    console.log("err:", err)
  }).then(res => {
    console.log("res1:", res)
  })
}, 1000)
