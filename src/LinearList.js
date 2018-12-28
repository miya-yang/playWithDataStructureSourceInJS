/**
 * @name 线性表
 * @author Miyang
 * @version 1.0
 */
class LinearList {
  constructor (array) {
    this.dataList = array
  }

  /**
   * @name InitList
   * @description 初始化线性表
   */
  InitList () {
    this.dataList = []
  }

  /**
   * @name ListEmpty
   * @description 判断线性表是否为空 为空返回true 否则返回false
   * @returns { Boolean } 线性表为空返回true 否则返回false
   */
  ListEmpty () {
    if(this.dataList instanceof Array && this.dataList.length === 0) {
      return true
    }
    return false
  }

  /**
   * @name GetElem
   * @description 获取线性表第 i 个元素
   * @param { Number } i 第 i 个元素
   * @returns { Object } 返回第 i 个元素
   */
  GetElem (i) {
    return this.dataList[i]
  }
}

// test
let list = new LinearList()
list.InitList()
console.log(list.ListEmpty())