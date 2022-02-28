let promise = new Promise((resolve, reject) => {
  resolve('1234')
})

promise.then(res => {
  console.log(res,'第一次')
})

promise.then(res => {
  console.log(res,'第二次')
})