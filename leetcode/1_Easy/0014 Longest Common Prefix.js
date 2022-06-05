/* https://leetcode.com/problems/longest-common-prefix/ */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  const str = strs[0];
  let result = '';

  for (let n = 0; n < str.length; n++) {
    const char = str[n];

    if (char === undefined) {
      return result;
    }

    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][n]) {
        return result;
      }
    }
    result += char;
    console.log(result);
  }
  return result;
};

console.log(longestCommonPrefix((strs = ['flower', 'flow', 'flight']))); // "fl"
console.log(longestCommonPrefix((strs = ['dog', 'racecar', 'car']))); // ""
console.log(longestCommonPrefix((strs = ['flower', 'flower', 'flower', 'flower']))); // "flower"
console.log(longestCommonPrefix((strs = []))); // ""
