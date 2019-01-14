/**
 * @name 静态链表（用数组描述的链表）
 * @description 这里模拟了链表的最大长度为1000
 * @author Miyang
 * @version 1.0
 */

const MAXSIZE = 1000

class StaticLinkList {
  constructor() {
    this.space = []
    this.e = null
    // 设置从 0 到 length-1 的 cur 值为下一个下标
    for (let i = 0; i < MAXSIZE - 1; i++) {
      this.space[i] = {}
      this.space[i].cur = i + 1
    }
    // 设置最后一个值的 cur 为 0
    this.space[MAXSIZE - 1] = {}
    this.space[MAXSIZE - 1].cur = 0
    return true
  }

  /**
   * @name Malloc_SLL
   * @description 若备用空间链表非空，则返回分配的结点下标，否则返回 0
   * @returns { Boolean } 分配的结点下标
   */
  Malloc_SLL() {
    let i = this.space[0].cur
    if (this.space[0].cur) {
      this.space[0].cur = this.space[i].cur
    }
    return i
  }

  /**
   * @name Free_SSL
   * @description 将下标为 k 的空闲结点回收到备用链表
   */
  Free_SSL(k) {
    // 把第一个元素 cur 值赋给要删除的分量cur
    this.space[k].cur = this.space[0].cur
    // 把要删除的分量下标赋值给第一个元素的cur
    this.space[0].cur = k
  }

  /**
   * @name ListLength
   * @description 获取静态链表使用的长度
   * @returns { Number } 静态链表使用的长度
   */
  ListLength() {
    let j = 0
    let i = this.space[MAXSIZE - 1].cur
    while (i) {
      i = this.space[i].cur
      j++
    }
    return j
  }

  /**
   * @name ListInsert
   * @descrption 在第 i 个元素之前插入新的数据元素 e
   * @param {*} i 第 i 个元素前插入
   * @param {*} e 待插入的数据元素 e
   * @returns { Boolean } 是否插入成功
   */
  ListInsert(i, e) {
    // k 是最后一个元素的下标
    let k = MAXSIZE - 1
    // 此处 +1 是允许在最后一个结点后添加元素
    if (i < 1 || i > this.ListLength() + 1) {
      return false
    }
    let j = this.Malloc_SLL()
    if (j) {
      this.space[j].data = e
      // 找到第 i 个元素之前的位置 注意这里并不是按数组顺序直接获取，因为存在插入的情况
      for (let l = 1; l <= i - 1; l++) {
        k = this.space[k].cur
      }
      // 把第 i 个元素之前的 cur 赋值给新元素的 cur
      this.space[j].cur = this.space[k].cur
      // 把新元素的下标赋值给第 i 个元素之前元素的 cur
      this.space[k].cur = j
      return true
    }
    return false
  }

  /**
   * @name ListDelete
   * @description 删除第 i 个数据元素 e
   * @param { Number } i 第 i 个数据元素
   * @returns { Boolean } 是否删除成功
   */
  ListDelete(i) {
    if (i < 1 || i > this.ListLength()) {
      return false
    }
    let k = MAXSIZE - 1
    for (let j = 1; j <= i - 1; j++) {
      k = this.space[k].cur
    }
    let j = this.space[k].cur
    // 将要删除的结点的 cur 赋给其前一结点的 cur
    this.space[k].cur = this.space[j].cur
    this.Free_SSL(j)
    return true
  }

  /**
   * @name GetItem
   * @description 获取第 i 个元素的值
   * @param {*} i 第 i 个元素
   * @returns { Boolean } 是否获取成功
   */
  GetItem(i) {
    if (i < 1 || i > this.ListLength()) {
      return false
    }
    let j = this.space[MAXSIZE - 1].cur
    for (let k = 1; k < i; k++) {
      j = this.space[j].cur
    }
    this.e = this.space[j].data
    return true
  }
}

// Test Case
let link = new StaticLinkList()
console.log(link.ListInsert(1, '666'))
console.log(link.ListInsert(1, '233'))
console.log(link.ListDelete(1))
for (let i = 1; i <= link.ListLength(); i++) {
  link.GetItem(i)
  console.log(link.e)
}