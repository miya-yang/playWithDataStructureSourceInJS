/**
 * @name 链栈（栈的链式存储结构）
 * @description 栈的链式存储结构
 * @author Miyang
 * @version 1.0
 */

class StackNode {
  constructor(e) {
    this.data = e
    this.next = null
  }
}

class LinkStack {
  constructor() {
    this.top = null
    this.count = 0
    this.e = null
  }

  /**
   * @name Push
   * @description 插入元素 e 为新的栈顶元素
   * @param { Object } e 入栈的元素 e
   * @returns { Boolean } 是否入栈成功
   */
  Push(e) {
    let node = new StackNode(e)
    node.next = this.top
    this.top = node
    this.count++
    return true
  }

  /**
   * @name Pop
   * @description 若栈不空，则删除栈顶元素，用 e 返回其值，并返回 true，否则返回 false
   * @returns { Boolean } 是否出栈成功
   */
  Pop() {
    if (this.StackEmpty()) {
      return false
    }
    this.e = this.top.data
    // 将栈顶结点赋值给 p
    let p = this.top
    // 使栈顶指针下移一位，指向后一结点
    this.top = this.top.next
    // 释放 p
    p = null
    this.count--
    return true
  }

  /**
   * @name StackEmpty
   * @description 判断栈是否为空
   * @returns { Boolean } 栈是否为空
   */
  StackEmpty() {
    return this.count === 0 ? true : false
  }
}