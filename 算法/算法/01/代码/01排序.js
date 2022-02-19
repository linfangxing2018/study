// 选择排序
function selectionSort(arr) {
  if (arr === null || arr.length < 2) {
    return 
  }
  // 0 ~ N - 1
  // 1 ~ N - 1
  // 2 ~ N - 1
  for (let i = 0; i < arr.length - 1; i++) {
    // 最小的位置在 i ~ N-1
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {   // j不是从0开始, 不用arr.length-1   
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    // 交换arr中i, minIndex位置
    swap(arr, i, minIndex)
    
  }
  console.log(arr)
  return arr
}

// 调换值的位置
function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
};
const array =selectionSort([10,2,3,6,9])


// 冒泡排序
function bubbleSort(arr) {
  if (arr === null || arr.length < 2) {
    return 
  }
  // 0 ~ N-1
  // 0 ~ N-2
  // 0 ~ N-3
  for (let e = arr.length - 1; e > 0; e--) { // 0 ~ e
    for (let i = 0; i < e; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  console.log(arr)
  return arr
}
// 交换arr的i和j位置上的值  注意i, j是不同内存地址的, 如果是同一个引用, 使用异或运算有问题
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
console.log(bubbleSort([10,2,3,8,7,6]))


// 插入排序
function insertionSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j+1)
    }
  }
  return arr
}
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

// 使用对数器写测试用例

// for test 对比的方法
function comparator(arr) {
  // 调用sort方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序, 如果有负数的话排序不正确
  arr.sort((a, b) => a - b)   
}

// for test
function generateRandomArray(maxSize, maxValue) {
  // Math.random() ->  [0,1) 所有的小数，等概率返回一个
  // Math.random() * N -> [0,N) 所有小数，等概率返回一个
  // (int)(Math.random() * N) -> [0,N-1] 所有的整数，等概率返回一个
  let size = parseInt((maxSize + 1) * Math.random())  // 取整数部分 
  let arr = new Array(size)   // 创建长度为 size的数组      
  console.log(arr,'dfdf')
  for (let i = 0; i < arr.length; i++) {
    // 可减可不减, 这样是为了 有正数有负数
    arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt((maxValue + 1) * Math.random())
  }
  return arr
}

// 用来测试另外一种方法的数据
function copyArray(arr) {
  if (arr === null) {
    return 
  }
  // 为什么不直接 let result = arr, 这样是指向同一个数组, 操作了同一个数组
  // insertSort(arr1)
  //  copyArray(arr2)
  let result = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i]
  }
  return result
}

// 比较两种方法 的结果
function isEqual(arr1, arr2) {
  if ((arr1 != null && arr2 == null) || (arr1 == null && arr2 != null)) {
    return false
  }
  if (arr1 == null && arr2 == null) {
    return true
  }
  if (arr1.length != arr2.length) {
    return false
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false
    }
  }
  return true
}


// 如果出错了 调试
// for test
function printArray(arr) {
  if (arr == null) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
  }
}

// for test
function main() {
  let testTime = 5  //如果算法报错了,可以调小这个进行测试, 比如5
  let maxSize = 100   // 随机数组的长度0～100
  let maxValue = 100 // 值：-100～100
  let succeed = true
  for (let i = 0; i < testTime; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue) 
    let arr2 = copyArray(arr1)
    insertionSort(arr1)
    comparator(arr2)
    if (!isEqual(arr1, arr2)) {
      console.log(arr1)
      console.log(arr2)
      succeed = false
      break
    }
    console.log(succeed ? "Nice!" : "Fucking fucked!")


    // let arr = generateRandomArray(maxSize, maxValue);
		// printArray(arr);
		// insertionSort(arr);
		// printArray(arr);
  }
}
main()