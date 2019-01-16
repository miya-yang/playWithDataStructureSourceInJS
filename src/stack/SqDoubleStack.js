/**
 * @name 共享栈（两栈共享存储空间）
 * @description 这里模拟了初始存储空间分配量为5的共享栈
 * @author Miyang
 * @version 1.0
 */

const MAXSIZE = 5

class SqDoubleStack {
  constructor() {
    this.data = []
    this.top1 = -1
    this.top2 = MAXSIZE
    this.e = null
  }

  /**
   * @name Push
   * @description 插入元素 e 为新的栈顶元素
   * @param { Object } e 入栈的元素 e
   * @param { Number } stackNumber 栈号
   * @returns { Boolean } 是否入栈成功
   */
  Push(e, stackNumber) {
    // 栈已满，不能再push新元素了
    if (this.top1 + 1 === this.top2) {
      return false
    }
    // 如果是栈1
    if (stackNumber === 1) {
      // 先top1+1后给数组元素赋值
      this.data[++this.top1] = e
    } else if (stackNumber === 2) {
      // 如果是栈2
      // 先top2-1后给数组元素赋值
      this.data[--this.top2] = e
    }
    return true
  }

  /**
   * @name Pop
   * @description 若栈不空，则删除栈顶元素，用 e 返回其值，并返回 true，否则返回 false
   * @param { Number } stackNumber 栈号
   * @returns { Boolean } 是否出栈成功
   */
  Pop(stackNumber) {
    // 如果是栈1
    if (stackNumber === 1) {
      // 空栈
      if (this.top1 === -1) {
        return false
      }
      // 将栈1的栈顶元素出栈
      this.e = this.data[this.top1--]
    } else if (stackNumber === 2) {
      // 空栈
      if (this.top2 === MAXSIZE) {
        return false
      }
      // 将栈2的栈顶元素出栈
      this.e = this.data[this.top2++]
    }
    return true
  }
}