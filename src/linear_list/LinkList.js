/**
 * @name 单链表（线性表的链式存储结构）
 * @description
 * @author Miyang
 * @version 1.0
 */

class LinkNode {
  constructor (e) {
    this.data = e
    this.next = null
  }
}

class LinkList {
  constructor () {
    this.head = new LinkNode('head')
    this.e = null
  }

  /**
   * @name GetElem
   * @description 用 e 返回单链表中第 i 个数据元素的值
   * @param { Number } i 第 i 个元素
   * @returns { Boolean } 获取成功返回 true 并且 e 为获取的数据元素，否则返回 false
   */
  GetElem (i) {
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
  ListInsert (i, e) {
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
    return true
  }
}

// Test Case
let list = new LinkList()
list.ListInsert(1, 666)
list.ListInsert(2, 999)
list.GetElem(2)
console.log(list.e)