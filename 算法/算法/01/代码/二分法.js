// 1. 判断有序数组中是否存在某个数字
function bSExist(arr, num) {
  // let index = -1
  // if (arr === null) {
  //   return index 
  // }
  // if (arr.length < 2) {
  //   return index = arr[0] === num ? 0 : -1
  // }
  // let mid = Math.ceil(arr.length / 2)
   
  // while (mid >= 1 && mid < arr.length) {
  //   if (num < arr[mid]) {
  //     mid = parseInt(mid / 2)
  //   } else if (num > arr[mid]) {
  //     mid = mid + parseInt(mid / 2)
  //   } else if(num === arr[mid]) {
  //     return index = mid
  //   }
  // }
  // return index = -1


  // 左神
  if (arr === null || arr.length === 0) {
    return false
  }

  let L = 0
  let R = arr.length - 1
  let mid = 0
  while (L < R) {
    // (L + R) / 2 
    // L + (R - L) / 2   防止数值过大溢出
    // (R - L) >> 2   除以2相当于右移动 1 位, 位运算比加减乘除速度快
    mid = L + ((R - L) >> 1)
    if (arr[mid] === num) {
      return true
    } else if (arr[mid] < num) {
      L = mid + 1
    } else {
      R = mid - 1
    }
  }
  return arr[mid] === num

}



// 判断7是否在这个数组中
// let arr = [1, 2, 5, 7, 9, 20, 30, 50, 51, 52, 59]
// console.log(bSExist(arr, 60),'ddfa')


// 对数器
// for test
function compareMethod(arr, num) {
  return arr.indexOf(num)   // indexOf存在就返回 下标, 不存在就返回 -1 , includes() 返回true 或者false
}

// for test
// 随机生成有序数组
function generateRandomArray(maxSize, maxValue) {
  let arr = new Array()
  arr.length = parseInt(maxSize * Math.random() + 1)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(Math.random() * maxValue + 1)
  }
  return arr.sort((a, b) => a -b)
}
// 复制数组
function copyAaary(arr) {
  if (!arr) return
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    arr1[i] = arr[i]
  }
  return arr1
}

// 值是否相同
function isEqual(val1, val2) {
  return val1 === val2
}

// 生成数组进行比较
function main() {
  let nums = 50
  let maxSize = 20
  let maxValue = 1000
  let exitNum = 150
  let succed = true
  for (let i = 0; i < nums; i++) {
   
    let arr1 = generateRandomArray(maxSize, maxValue)  // 数组是一个引用
    let arr2 = copyAaary(arr1)
    let val1 = bSExist(arr1, exitNum)
    let val2 = compareMethod(arr2, exitNum)
    succed = isEqual(val1, val2)
    if (!succed) {
      console.log(arr1,'aaaaa')
      console.log(val1,'1111')
      console.log(val2,'2222')
      break
    }
  }
  console.log(succed,'ddddd')
  return succed
}
main()



// 在一个有序数组, 找出 >= 某个数最左侧的位置
function nearLeftNum(arr, num) {
  if (arr === null || arr.length == 0) return 
  let L = 0
  let R = arr.length - 1
  let mid = 0
  let index = -1 // 标志位
  // [1,1,2,3,3,4,4]
  while (L <= R) {
    console.log(L,'111')
    console.log(R,'222')

    mid = L + ((R - L) >> 1)
    console.log(mid,'dddd')
    if (arr[mid] >= num) {
      index = mid
      R = mid - 1
    } else {
      L = mid + 1
    }
  }
  return index
}
nearLeftNum([1,2,3,4,5,7,8], 7)

// 在一个有序数组, 找出 <= 某个数最右侧的位置
function nearLeftNum(arr, num) {
  if (arr === null || arr.length == 0) return 
  let L = 0
  let R = arr.length - 1
  let mid = 0
  let index = -1 // 标志位
  // [1,1,2,3,3,4,4]
  while (L <= R) {
    mid = L + ((R - L) >> 1)
    if (arr[mid] >= num) {
      R = mid - 1
    } else {
      index = mid
      L = mid + 1
    }
  }
  return index
}
nearLeftNum([1,2,3,4,5,7,8], 7)


// 不一定是有序数据才能使用二分法, 无序数组也可以使用二分法, 只要能正确构建左右两侧的淘汰逻辑你就可以二分
// 比如求局部最小值
// arr是无序数组, 相邻相等, 返回数组其中一个局部最小值

// 满足其中一种就行
// 1. 0位置跟1位置, 如果0位置比1位置小就是局部最小值
// 2. N-1位置跟N-2位置, 如果N-1位置比N-2位置小就是局部最小值
// 3. N位置比N-1跟N+1位置小, N就是局部最小值

function litleNum(arr) {
  if (arr === null || arr.length === 0) {
    return -1   // no exits
  }
  if (arr.length == 1 || arr[0] < arr[1]) {
    return 0
  }
  if (arr[arr.length - 1] < arr[arr.length - 2]) {
    return arr[arr.length - 1]
  }
  let L = 1
  let R = arr.length - 2
  let mid = 0
  while (L < R) {
    mid = Math.ceil((R + L) / 2) 
    if (arr[mid - 1] > arr[mid] && arr[mid + 1] > arr[mid]) {
      return mid
    }
    if (arr[mid - 1] < arr[mid]) {
      R = mid - 1
    } else if (arr[mid + 1] < arr[mid]){
      L = mid + 1
    }
  }
  return L
}
// console.log(litleNum([4,3,6],'wer'))
// console.log(litleNum([2,3,6],'wer'))
// console.log(litleNum([4,3,2],'wer'))
console.log(litleNum([4,3,5,7,1,2],'wer'))






