/**
 * @name 顺序表（线性表的顺序存储结构）
 * @description 这里模拟了初始存储空间分配量为20的顺序表
 * @author Miyang
 * @version 1.0
 */
class SqList {
  constructor () {
    this.dataList = []
    this.MAXSIZE = 20
    this.e = null
  }

  /**
   * @name ListEmpty
   * @description 判断顺序表是否为空 为空返回true 否则返回false
   * @returns { Boolean } 顺序表是否为空
   */
  ListEmpty () {
    if(this.dataList instanceof Array && this.dataList.length === 0) {
      return true
    }
    return false
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

// test
let list = new SqList()
console.log(list.ListInsert(1, 666))
console.log(list.GetElem(1))
console.log(list.e)
console.log(list.ListDelete(1))
console.log(list.e)