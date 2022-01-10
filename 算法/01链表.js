/* 
  多个元素组成的列表
  元素存储不连续，用next指针连在一起, 链表中的节点只会指向下一个节点, 无法知道上个节点信息

  数组： 增删非首尾元素时往往需要移动元素
  链表： 增删非首尾元素, 不需要移动元素, 只需要更改next指向即可

  js中没有链表, 可以用Object 模拟链表
*/
const a = { val: 'a'}
const b = { val: 'b'}
const c = { val: 'c'}
const d = { val: 'd'}
a.next = b
b.next = c
c.next = d

// 遍历链表, 先声明指针p
let p = a
while (p) {
  console.log(p.val),
  p = p.next
}

// 链表里面插入值
const e = { val: 'e'}
c.next = e
e.next = d

// 删除e
c.next = d


// 题号237

// 将被删除的节点的下个节点的值转移到删除节点，再把删除节点的下个节点值删除

// 206反转链表
// 如果只反转两个节点, 将n+1 的next 指向n就行
// 反转多个节点： 双指针遍历链表, 重复上述操作

// 步骤
// 双指针一前一后遍历列表
// 反正双指针