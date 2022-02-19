// 纯函数不会产生闭包
// 不用自己一步一步手动写柯里化
// 函数式编程, 把函数当成第一公民, 函数可以当作返回值,参数
function add1(x, y, z) {
  return x + y + z
}

function add2(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

function makeAdder(count) {
  count = count * count

  return function(num) {
    return count + num
  }
}

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`)
}

// 实现这个函数

// 1. 传入一个函数, 返回了一个新的函数


// 柯里化函数的实现hyCurrying
function hyCurrying(fn) {
  // fn是需要柯里化的函数 fn.length拿到fn函数的参数长度
  function curried(...args) {
    // 判断当前已经接收的参数的个数, 判断参数本身需要接受的参数是否已经一致了
    // 1.当已经传入的参数 大于等于 需要的参数时, 就执行函数
    // 默认this指向window
    if (args.length >= fn.length) {
      // fn(...args)
      // fn.call(this, ...args)
      return fn.apply(this, args)
    } else {
      // 没有达到个数时, 需要返回一个新的函数, 继续来接收的参数
      function curried2(...args2) {
        // 接收到参数后, 需要递归调用curried来检查函数的个数是否达到
        // return curried.apply(this, [...args, ...args2])
        return curried.apply(this, args.concat(args2))
      }
      return curried2
    }
  }
  return curried
}

var curryAdd = hyCurrying(add1)

console.log(curryAdd.call('abc', 10, 20, 30))
console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))

// function foo(x, y, z, m, n, a, b) {

// }
// console.log(foo.length)  这样可以拿到函数的参数个数


function foo(x, y, z) {
  return x + y + z
}

foo.call({}, 1, 2, 3)

var curryFoo = hyCurrying(foo)
curryFoo.call({}, 1)

