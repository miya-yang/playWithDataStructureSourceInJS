/**
 * @name Boyer-Moore 算法
 * @description 这里仅使用坏字符，好后缀暂时未使用
 * @author Miyang
 * @version 1.0
 * @param { String } str 主串
 * @param { String } subStr 子串
 */
function BoyerMoore(str, subStr) {
  let i = 0
  while (i <= str.length - subStr.length) {
    // 对比子串
    for (let j = subStr.length - 1; j >= 0; j--) {
      // 找到坏字符
      if (str[i + j] !== subStr[j]) {
        // 计算后移位置，更新 i 值
        let ch = str[i + j]
        i += BadCharShift(ch, subStr, j)
        break
      }
      // 没有出现坏字符，返回当前 i
      if (j === 0) {
        return i
      }
    }
  }
  // 没有找到子串，返回 -1
  return -1
}

/**
 * @name BadCharShift
 * @description 坏字符后移位数
 * @param { ch } String 坏字符
 * @param { subStr } String 子串
 * @param { chIndex } Number 坏字符位置
 * @returns { Number } 坏字符后移位数
 */
function BadCharShift(ch, subStr, chIndex) {
  for (let i = subStr.length - 1; i >= 0; i--) {
    if (ch === subStr[i]) {
      return (chIndex - i)
    }
  }
  return (chIndex + 1)
}

// Test Case
console.log(BoyerMoore('HERE IS A SIMPLE EXAMPLE', 'EXAMPLE'))
console.log(BoyerMoore('abcd', 'e'))