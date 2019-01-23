/**
 * @name K-M-P 算法
 * @description KMP next数组方法
 * @author Miyang
 * @version 1.0
 * @param { String } str 主串
 * @param { String } subStr 子串
 */
function KMP(str, subStr) {
  // 生成部分匹配值
  let partialMatchingValue = getPartialMatchingValue(subStr)
  let i = 0
  let j = 0
  while (i <= str.length - subStr.length) {
    while (j < subStr.length) {
      // 如果子串的首位不匹配
      if (j === 0 && str[i + j] !== subStr[j]) {
        i++
        break
      } else if (str[i + j] !== subStr[j]) {
        // 如果子串不是首位不匹配
        // 移动位数
        let shift = j - partialMatchingValue[j - 1]
        j -= shift
        i += shift
        break
      } else if (str[i + j] === subStr[j] && j === subStr.length - 1) {
        return i
      }
      j++
    }
  }
  return -1
}

/**
 * @name getPartialMatchingValue
 * @description 求 next 数组
 * @param { subStr } String 子串
 * @returns { Number } next 数组
 */
function getPartialMatchingValue(subStr) {
  let partialMatchingValue = []
  for (let i = 0; i < subStr.length; i++) {
    if (i === 0) {
      partialMatchingValue[i] = 0
    } else {
      let prefix = []
      let postfix = []
      // 生成前后缀
      for (let j = 1; j < i + 1; j++) {
        prefix.push(subStr.substr(0, j))
        postfix.push(subStr.substr(i - j + 1, j))
      }
      // 对比计算部分匹配值
      for (let j = i - 1; j >= 0; j--) {
        if (prefix[j] === postfix[j]) {
          partialMatchingValue[i] = prefix[j].length
          break
        }
        if (j === 0) {
          partialMatchingValue[i] = 0
        }
      }
    }
  }
  return partialMatchingValue
}

// Test Case
console.log(KMP('HERE IS A SIMPLE EXAMPLE', 'EXAMPLE'))
console.log(KMP('abcd', 'e'))