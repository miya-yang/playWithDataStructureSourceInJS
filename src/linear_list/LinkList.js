/**
 * @name 单链表（线性表的链式存储结构）
 * @description
 * @author Miyang
 * @version 1.0
 */

class LinkNode {
  constructor(e) {
    this.data = e
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = new LinkNode('head')
    this.e = null
    this.length = 0
  }

  /**
   * @name GetElem
   * @description 用 e 返回单链表中第 i 个数据元素的值
   * @param { Number } i 第 i 个元素
   * @returns { Boolean } 获取成功返回 true 并且 e 为获取的数据元素，否则返回 false
   */
  GetElem(i) {
    let p = this.head.next
    // 计数器
    let j = 1
    while (p && j < i) {
      p = p.next
      j++
    }
    if (!p || j > i) {
      return false
    }
    this.e = p.data
    return true
  }

  /**
   * @name ListInsert
   * @description 在单链表第 i 个位置之前插入新的数据元素 e
   * @param { Number } i 第 i 个位置
   * @param { Object } e 插入的元素
   * @returns { Boolean } 插入成功返回 true ，否则返回 false
   */
  ListInsert(i, e) {
    let p = this.head
    // 计数器
    let j = 1
    while (p && j < i) {
      p = p.next
      j++
    }
    if (!p || j > i) {
      return false
    }
    let s = new LinkNode(e)
    s.next = p.next
    p.next = s
    this.length++
    return true
  }

  /**
   * @name ListDelete
   * @description 删除第 i 个结点，并用 e 返回其值
   * @param { Number } i 第 i 个位置
   * @param { Object } e 被删除的元素
   * @returns { Boolean } 插入成功返回 true ，否则返回 false
   */
  ListDelete(i, e) {
    let p = this.head
    let j = 1
    while (p && j < i) {
      p = p.next
      j++
    }
    if (!p || j > i) {
      return false
    }
    let q = p.next
    p.next = q.next
    this.e = q.data
    q = null
    this.length--
    return true
  }

  /**
   * @name ListLength
   * @description 返回单链表的元素个数
   * @returns { Number } 顺序表的元素个数
   */
  ListLength() {
    return this.length
  }

  /**
   * @name CreateListHead
   * @description 随机产生 n 个元素的值，建立带表头结点的单链线性表 L （头插法）
   * @param { Number } n 随机产生 n 个元素的值
   */
  CreateListHead(n) {
    // 计数器
    let i = 0
    for (let i = 0; i < n; i++) {
      // 生成随机100以内数字
      let rand = Math.floor(Math.random() * 100) + 1
      let p = new LinkNode(rand)
      p.next = this.head.next
      this.head.next = p
      this.length++
    }
  }

  /**
   * @name CreateListTail
   * @description 随机产生 n 个元素的值，建立带表头结点的单链线性表L（尾插法）
   * @param { Number } n 随机产生 n 个元素的值
   */
  CreateListTail(n) {
    let i = 0
    let r = this.head
    for (let i = 0; i < n; i++) {
      // 生成随机100以内数字
      let rand = Math.floor(Math.random() * 100) + 1
      let p = new LinkNode(rand)
      r.next = p
      r = p
      this.length++
    }
    r.next = null
  }

  /**
   * @name ClearList
   * @description 将单链表重置为空表
   */
  ClearList() {
    let p, q
    p = this.head.next
    while (p) {
      q = p.next
      p = null
      p = q
      this.length--
    }
    return true
  }
}

// Test Case
let list = new LinkList()
list.ListInsert(1, 666)
list.ListInsert(2, 999)
list.GetElem(2)
console.log(list.length)
list.ListDelete(1)
console.log(list.e)
list.GetElem(1)
console.log(list.e)
console.log(list.length)
console.log('======')
let list2 = new LinkList()
list2.CreateListHead(5)
console.log(list2.length)
for (let i = 1; i <= 5; i++) {
  list2.GetElem(i)
  console.log(list2.e)
}
console.log('======')
let list3 = new LinkList()
list3.CreateListTail(5)
console.log(list3.length)
for (let i = 1; i <= 5; i++) {
  list3.GetElem(i)
  console.log(list3.e)
}
list3.ClearList()
console.log(list3.length)