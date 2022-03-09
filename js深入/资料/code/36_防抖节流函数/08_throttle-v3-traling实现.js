function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 1.记录上一次的开始时间
  const { leading, trailing } = options
  let lastTime = 0
  let timer = null

  // 2.事件触发时, 真正执行的函数
  const _throttle = function() {

    // 2.1.获取当前事件触发时的时间
    const nowTime = new Date().getTime()
    if (!lastTime && !leading) lastTime = nowTime

    // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      // 一开始就会有一个定时器, 但是在执行这个函数的时候不需要再执行一次
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      // 2.3.真正触发函数
      fn()
      // 2.4.保留上次触发的时间
      lastTime = nowTime
      return
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null // 设置为null才能开启下一个定时器
        lastTime = !leading ? 0: new Date().getTime()  // 设置为new Date().getTime(), 不会执行上面的if逻辑
        fn()
      }, remainTime)
    }
  }

  return _throttle
}
