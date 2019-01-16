/**
 * @name 顺序栈（栈的顺序存储结构）
 * @description 这里模拟了初始存储空间分配量为5的顺序栈
 * @author Miyang
 * @version 1.0
 */

const MAXSIZE = 5

class SqStack {
  constructor() {
    this.data = []
    this.top = -1
    this.e = null
  }

  /**
   * @name Push
   * @description 插入元素 e 为新的栈顶元素
   * @param { Object } e 入栈的元素 e
   * @returns { Boolean } 是否入栈成功
   */
  Push(e) {
    // 栈满
    if (this.top === MAXSIZE - 1) {
      return false
    }
    this.top++
    this.data[this.top] = e
    return true
  }

  /**
   * @name Pop
   * @description 若栈不空，则删除栈顶元素，用 e 返回其值，并返回 true，否则返回 false
   * @returns { Boolean } 是否出栈成功
   */
  Pop() {
    if (this.top === -1) {
      return false
    }
    this.e = this.data[this.top]
    this.top--
    return true
  }

  /**
   * @name StackLength
   * @description 返回栈的元素个数
   * @returns { Number } 栈的元素个数
   */
  StackLength() {
    return this.top + 1
  }

  /**
   * @name GetTop
   * @description 若栈存在且非空，用 e 返回栈顶元素
   * @returns { Boolean } 获取栈顶元素是否成功
   */
  GetTop() {
    if (!(this.data instanceof Array) || this.top === -1) {
      return false
    }
    this.e = this.data[this.top]
    return true
  }
}

// Test Case
let stack = new SqStack()
console.log(stack.StackLength())
stack.Push('666')
stack.GetTop()
console.log(stack.e)
console.log(stack.StackLength())
stack.Push('233')
stack.GetTop()
console.log(stack.e)
console.log(stack.StackLength())
stack.Pop()
console.log(stack.e)
console.log(stack.StackLength())