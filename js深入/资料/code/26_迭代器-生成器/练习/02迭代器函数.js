function createArrayIterator(arr) {
  let index = 0
  return {
    next: function() {
      if (index < arr.length) {
        return {
          done: false,
          value: arr[index++]
        }
      } else {
        return {
          done: true,
          value: undefined
        }
      }
    }
  }
}
const names = createArrayIterator(['name', 'lin', 'zhang'])
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
