// 1. 迭代器对象
const iterator = {
  next: function() {
    return { done: false, value: '123'}
  }
}

const names = ['wan', 'zhang', 'wan']
let index = 0
const namesIterator = {
  // index: 0,  // 不能这么定义, 如果迭代器对象被多个地方调用
  next: function() {
    if (this.index < names.length) {
      return { done: false, value: names[index++]} // this.index++, 操作完进行++
    } else {
      return { done: true, value: names[index]}
    }
  }
}
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

