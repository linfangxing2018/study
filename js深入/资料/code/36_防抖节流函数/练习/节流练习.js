const throttle = function (fn, delay, options = {leading: true, trailing: false}) {
  let lastTime = 0
  let timer = null
  const { leading, trailing } = options
  const _throttle = function (...args) {
    const nowTime = new Date().getTime()
    if (!lastTime && !leading) lastTime = nowTime
    const rateTime = delay - (nowTime - lastTime)
    if (rateTime <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      } 
      fn.apply(this, args)
      lastTime = nowTime
    } else {
      if (!timer && trailing) {
        timer = setTimeout(() => {
          timer = null
          lastTime = 0  
          fn.apply(this, args)
        }, rateTime)
      }
    }
    
  }
  return _throttle
}