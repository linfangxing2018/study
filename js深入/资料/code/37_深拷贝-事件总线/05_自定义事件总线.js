// github hy_event_loop
// on监听, emit 触发, off 移除
// vue2提供 eventbus功能, vue3移除
class HYEventBus {
  constructor() {
    this.eventBus = {}
  }

  // eventCallback 回调函数 是监听到emit触发后执行的函数 
  // on, emit 配合来用
  // 同一个eventName 可以绑定不同回调函数
  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArg  // this指向
    })
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    const newHandlers = [...handlers]  
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i]
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }
    // handlers = handlers.filter(item => {
    //   return item !== eventCallback
    // })
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    })
  }
}

const eventBus = new HYEventBus()

// main.js
eventBus.on("abc", function() {
  console.log("监听abc1", this)   
}, {name: "why"})

const handleCallback = function() {
  console.log("监听abc2", this)
}
eventBus.on("abc", handleCallback, {name: "why"})

// utils.js
eventBus.emit("abc", 123)

// 移除监听
eventBus.off("abc", handleCallback)
eventBus.emit("abc", 123)

