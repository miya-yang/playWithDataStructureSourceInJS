/**
 * @name 链队列（队列的链式存储结构）
 * @description 队列的链式存储结构
 * @author Miyang
 * @version 1.0
 */

class LinkQueue {
  constructor() {
    this.front = new QNode('front')
    this.rear = new QNode('rear')
    this.e = null
  }

  /**
   * @name EnQueue
   * @description 插入元素 e 为新的队尾元素
   * @returns { Boolean } 入队是否成功
   */
  EnQueue(e) {
    let node = new QNode(e)
    // 将新结点赋值给原队尾结点的后继
    this.rear.next = node
    // 将当前结点设置为队尾结点
    this.rear = node
    return true
  }

  /**
   * @name DeQueue
   * @description 若队列不空，则删除队头元素，用 e 返回其值
   * @returns { Boolean } 是否出队成功
   */
  DeQueue() {
    if (this.front === this.rear) {
      return false
    }
    // 将要删除的结点赋给 p
    let p = this.front.next
    // e 表示要删除的结点的值
    this.e = p.data
    // 将头结点的后继赋值给要删除的结点的后继
    this.front.next = p.next
    // 如果队头是队尾，则删除并将 rear 指向头结点
    if (this.rear === p) {
      this.rear = this.front
    }
    return true
  }
}

class QNode {
  constructor(e) {
    this.data = e
    this.next = null
  }
}