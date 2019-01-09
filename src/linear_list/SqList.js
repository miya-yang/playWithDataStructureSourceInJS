/**
 * @name 顺序表（线性表的顺序存储结构）
 * @description 这里模拟了初始存储空间分配量为20的顺序表
 * @author Miyang
 * @version 1.0
 */

const _MAXSIZE = 20
class SqList {
  constructor () {
    this.dataList = []
    this.MAXSIZE = _MAXSIZE
    this.e = null
  }

  /**
   * @name ListInit
   * @description 初始化操作，建立一个空的顺序表
   */
  InitList () {
    this.dataList = []
    this.MAXSIZE = _MAXSIZE
    this.e = null
  }

  /**
   * @name ListEmpty
   * @description 若顺序表为空，返回true 否则返回false
   * @returns { Boolean } 顺序表是否为空
   */
  ListEmpty () {
    if(this.dataList instanceof Array && this.dataList.length === 0) {
      return true
    }
    return false
  }

  /**
   * @name ClearList
   * @description 将顺序表清空
   */
  ClearList () {
    this.dataList = []
    this.e = null
  }

  /**
   * @name LocateElem
   * @param { Object } e 查找的元素 e
   * @returns { Number } 如果查找成功，返回该元素在表中序号表示成功；否则，返回0表示失败
   */
  LocateElem (e) {
    for (let i = 0; i < this.dataList.length; i++) {
      if (this.dataList[i] === e) {
        return i + 1
      }
    }
    return 0
  }

  /**
   * @name ListLength
   * @description 返回顺序表的元素个数
   * @returns { Number } 顺序表的元素个数
   */
  ListLength () {
    return this.dataList.length
  }

  /**
   * @name GetElem
   * @description 用 e 返回顺序表中第 i 个数据元素的值
   * @param { Number } i 第 i 个元素
   * @returns { Boolean } 获取成功返回 true 并且 e 为获取的数据元素，否则返回 false
   */
  GetElem (i) {
    if (this.dataList.length === 0 || i < 1 || i > this.dataList.length) {
      return false
    }
    this.e = this.dataList[i - 1]
    return true
  }

  /**
   * @name ListInsert
   * @description 在顺序表第 i 个位置之前插入新的数据元素 e
   * @param { Number } i 第 i 个位置
   * @param { Object } e 插入的元素
   * @returns { Boolean } 插入成功返回 true ，否则返回 false
   */
  ListInsert (i, e) {
    // 顺序表已经满
    if (this.dataList.length === this.MAXSIZE) {
      return false
    }
    // 当 i 不在范围内时
    if (i < 1 || i > this.dataList.length + 1) {
      return false
    }
    this.dataList.splice(i - 1, 1, e)
    return true
  }

  /**
   * @name ListDelete
   * @description 删除顺序表的第 i 个数据元素，并用 e 返回其值
   * @param { Number } i 第 i 个位置
   * @returns { Boolean } 删除成功返回 true ，否则返回 false
   */
  ListDelete (i) {
    // 线性表为空
    if (this.dataList.length === 0) {
      return false
    }
    // 删除位置不明确
    if (i < 1 || i > this.dataList.length) {
      return false
    }
    this.e = this.dataList.splice(i - 1, 1)[0]
    return true
  }
}

// Test Case
let list = new SqList()
list.ListInsert(1, 666)
list.GetElem(1)
console.log(list.e)
console.log(list.LocateElem(666))
list.ListDelete(1)
console.log(list.e)
list.InitList()
console.log(list.e)
console.log(list.ListLength())