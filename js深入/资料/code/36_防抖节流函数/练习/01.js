// function debounce(fn, delay, immediate = false, resultCallback) {
//   let timer = null
//   let isInvoke = false

//   const _debounce = function (...args) {
//     if (timer) clearTimeout(timer)
//     if (immediate && !isInvoke) {
//       // 返回值第一种方法
//       const result =  fn.apply(this, args)
//       if (resultCallback) resultCallback(result)
//       isInvoke = true
//     } else {
//       timer = setTimeout(() => {
//         const result =  fn.apply(this, args)
//         if (resultCallback) resultCallback(result)
//         isInvoke = false
//       }, delay)
//     }
//   }
//   _debounce.cancel = function () {
//     if (timer) clearTimeout(timer)
//     console.log(timer,'1111')  // 就算取消了定时器, 但是timer还是保留着一个编号
//     isInvoke = false
//     timer = null     // 所以这里要设为null
//   }
//   return _debounce
// }

// 返回值第二种方法
function debounce(fn, delay, immediate = false, resultCallback) {
  let timer = null
  let isInvoke = false

  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)
      if (immediate && !isInvoke) {
        
        const result =  fn.apply(this, args)
        if (resultCallback) resolve(result)
        isInvoke = true
      } else {
        timer = setTimeout(() => {
          const result =  fn.apply(this, args)
          if (resultCallback) resolve(result)
          isInvoke = false
        }, delay)
      }
    })
  }
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    console.log(timer,'1111')  // 就算取消了定时器, 但是timer还是保留着一个编号
    isInvoke = false
    timer = null     // 所以这里要设为null
  }
  return _debounce
}
















// function run() {
//   console.log(this,'我跑步了')
// }
// let student = {
//   name: 'lin'
// }
// student.run = run
// student.run()