// 链表的内存地址不是连续的
// 单链表A -> B -> C -> null
// head
// 双向链表


// 反转链表
// A -> B -> C -> null
// C -> B -> A -> null

const a = { val: 'a'}
const b = { val: 'b'}
const c = { val: 'c'}
const d = { val: 'd'}
a.next = b
b.next = c
c.next = d
d.next = null
console.log(a)

// 单链表反转
function reverseList(head) {
  let pre = null // 上一个
  let next = null // 下一个
  while (head != null) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}
console.log(reverseList(a))

// 双向链表实现
function DoubleLinkList() {
  
}