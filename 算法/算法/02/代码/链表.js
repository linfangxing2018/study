// js中原型链
const a = {val: 'lin'}
const b = {val: 'wan'}
const c = {val: 'zhang'}  
a.next = b
b.next = c
c.next = null   

// 实现一个简单的单向链表
class LinkedList {
  constructor() {
    this.count = 0 // 链表中的元素个数
    this.head = null // 链表中第一个元素
  }
  // 往数组增加节点
  push(element) {
    const node = new Node(Element) 
    if (this.head == null) {   // 如果是第一个元素
      this.head = node  
    } else {    // 不是第一个元素就把新增节点添加到最后
      let cur = this.head
      while(cur.next != null) {   // 遍历链表, 链表的最后一项指向 null
        cur = cur.next
      }
      cur.next = node
    }
    this.count++
  }
}
// 节点类
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 双向链表
class DoubleNode extends Node{
  constructor(element, next) {
    super(element, next)
    this.prev = null
  }
}
class DoubleLinkedList extends LinkedList {
  constructor(count, head) {
    super(count, head)
    this.tail = null 
  }
  append (element) {
    const node = new DoubleNode(element)
    if (this.head == null) {
      this.head = node   // head跟tail都指向这个元素  引用
      this.tail = node
    } else {
      let cur = this.tail // 这个时候tail指向最后一个节点
      cur.next = node
      node.prev = cur
      this.tail = node.next
    }
  }
}
let aaa = new DoubleLinkedList()
aaa.append('aaa')
aaa.append('bbb')
console.log(aaa)