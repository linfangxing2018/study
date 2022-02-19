// >> 1 带符号位右移一位(左边符号位补全,0 是正, 1是负),相当于 / 2
// >>> 1 不带符号位右移一位(左边都用0补全)
// << 1  带符号位左移一位, 右边用0补全
// & 与  两个为1才为1
// | 或 有一个为1就为1

// 0 ^ N == N , N ^ N == 0
// 满足结合律和交换律


// 1. 在不申请额外变量的情况下, 交换两个值的位置
function  swap(i, j) {
  i = i ^ j   // i: i ^ j , j: j
  j = i ^ j   // i: i ^ j , j: i ^ j ^ j == i
  i = i ^ j   // i: i ^ j ^ i == j, j: i
}
// 面试的时候不用这么炫技
// 直接 i = j; j = i 即可
//注意: 这两个值一定要是不同的内存地址, 如果内存地址一样(比如对同一个对象的引用)
// i = i ^ i --> 0
// i = i ^ i --> 0
// i = i ^ i --> 0

// 2. arr中，只有一种数，出现奇数次 (N^N == 0)
function oddNumber(arr) {
  if (arr === null || arr.length === 0) {
    return 
  }
  let eor = 0
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]
  }
  return eor
}
// console.log(oddNumber([1,1,2,2,3,3,3]))

// 3. 把一个数的二进制的最右侧的 1 提取出来
// 原始   N = 0...01101010000
// 取反   N = 1...10010101111
// + 1    N = 1...10010110000
// & N      = 0...00000010000   

function getRightOne(i) {
  return i & ((~i) + 1)
}
console.log(getRightOne(10),'dddd')

// 4. 一个数组中有两种数出现了奇数次, 其他数出现偶数次, 找出这两种数
function findOdd(arr) {
  if (arr === null || arr.length === 0) {
    return
  }
  let eor = 0
  // 假设两个数分别为 a, b
  let a = 0
  let b = 0
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]  // 最后eor === a ^ b (a一定不等于 b, 等于就为偶数了)
  }
  // eor = a ^ b 不等于 0 , 所以 eor一定在某一个位置上有1
  // 我们可以找出最右侧的1
  let right1 = eor & ((~eor) + 1)
  // 把数组分成两个部分, 一部分有最右侧有1, 一部分没有
  for (let i = 0; i < arr.length; i++) {
    // 选出 某个位置都有 1 的数
    if ((right1 & arr[i]) !== 0) {
      console.log(arr[i],'12324')
      a ^= arr[i]  
    }
  }
  // 另一位  a ^ b ^a === b
  b = eor ^ a   
  console.log(a, b)
  return [a, b]
}

console.log(findOdd([1,1,2,2,3,4]))


// 找出一个整型的二进制数字有几个1
function bit1counts(N) {
  let count = 0 // 记录1的个数
  let right = 0
  while (N != 0) {
    right = N * ((~N) + 1)
    count++
    N ^= right
    // 为什么不用减法 N -= right, 如果N 为负数的话减法跟整数不一样  
    //   100000110  -6
    // ^ 100000010  -2
    //   100000100  -4
    // 减法结果是 -8
  }
  return count
}