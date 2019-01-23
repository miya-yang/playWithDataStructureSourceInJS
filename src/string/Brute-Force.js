/**
 * @name Brute-Force 算法
 * @description 暴力解法
 * @author Miyang
 * @version 1.0
 * @param { String } str 主串
 * @param { String } subStr 子串
 */
function BruteForce(str, subStr) {
  let i = 0
  while (i <= str.length - subStr.length) {
    // 子串循环对比
    for (let j = 0; j < subStr.length; j++) {
      // 如果出现异位，结束此次循环
      if (str[i + j] !== subStr[j]) {
        break
      }
      // 均相等，查找成功
      if (j === subStr.length - 1) {
        return i
      }
    }
    i++
  }
  return -1
}

// Test Case
console.log(BruteForce('HERE IS A SIMPLE EXAMPLE', 'EXAMPLE'))
console.log(BruteForce('abcd', 'e'))