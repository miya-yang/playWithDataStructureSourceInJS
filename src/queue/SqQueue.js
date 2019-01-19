/**
 * @name 循环队列（队列的顺序存储结构）
 * @description 队列的顺序存储结构
 * @author Miyang
 * @version 1.0
 */

const MAXSIZE = 5

class SqQueue {
  constructor() {
    this.data = []
    this.front = 0
    this.rear = 0
    this.e = null
  }

  /**
   * @name InitQueue
   * @description 初始化一个空队列
   * @returns { Boolean } 是否初始化成功
   */
  InitQueue() {
    this.front = 0
    this.rear = 0
    this.e = null
    return true
  }

  /**
   * @name QueueLength
   * @description 返回队列的元素个数，即队列的当前长度
   * @returns { Number } 队列的当前长度
   */
  QueueLength() {
    return (this.rear - this.front + MAXSIZE) % MAXSIZE
  }

  /**
   * @name EnQueue
   * @description 若队列未满，则插入元素 e 为新的队尾元素
   * @param { Object } e 入队的元素 e
   * @returns { Boolean } 是否入队成功
   */
  EnQueue(e) {
    // 队列满的情况下
    if ((this.rear + 1) % MAXSIZE === this.front) {
      return false
    }
    // 将元素 e 赋值给队尾
    this.data[this.rear] = e
    // rear指针向后移一位置，这样写当到最后时可以转移到数组头部
    this.rear = (this.rear + 1) % MAXSIZE
    return true
  }

  /**
   * @name DeQueue
   * @description 若队列不空，则删除队头元素，用 e 返回其值
   * @returns { Boolean } 是否出队成功
   */
  DeQueue() {
    // 队列空的判断
    if (this.front === this.rear) {
      return false
    }
    // 将队头元素赋值给 e
    this.e = this.data[this.front]
    // 将 front 指针向后移一位
    this.front = (this.front + 1) % MAXSIZE
    return true
  }
}

// Test Case
let queue = new SqQueue()
queue.EnQueue('666')
queue.EnQueue('233')
queue.DeQueue()
console.log(queue.e)
queue.DeQueue()
console.log(queue.e)