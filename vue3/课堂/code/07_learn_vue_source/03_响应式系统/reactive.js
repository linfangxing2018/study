class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect();
    })
  }
}

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}


// Map({key: value}): key是一个字符串
// WeakMap({key(对象): value}): key是一个对象, 弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1.根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2.取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}


// vue3对raw进行数据劫持
// vue3跟vue2不一样, vue2使用 Object.defineProperty对对象本身进行劫持
// vue3使用的是proxy, 代理对象 , 代理对象改变, 原对象也会改变
// vue3 setup写法
// import { reactive } from 'vue'
export default {
  setup() {
    let proxyObj = reactive({
      name: 'lin'
    })
    proxyObj.name = 'lin'
    return {
      proxyObj
    }
  }
}

function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
    }
  })
}

// const proxy = reactive({name: "123"})
// proxy.name = "321";


// // 测试代码
// const info = reactive({counter: 100, name: "why"});
// 返回的对象是响应式对象 修改foo就会触发
const foo = reactive({height: 1.88});

// // watchEffect1
// watchEffect(function () {
//   console.log("effect1:", info.counter * 2, info.name);
// })

// // watchEffect2
// watchEffect(function () {
//   console.log("effect2:", info.counter * info.counter);
// })

// // watchEffect3
// watchEffect(function () {
//   console.log("effect3:", info.counter + 10, info.name);
// })

// watchEffect(function () {
//   console.log("effect4:", foo.height);
// })



// info.counter++;
// info.name = "why";

foo.height = 2;

