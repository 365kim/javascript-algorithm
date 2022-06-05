// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      if (j === needle.length - 1) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr((haystack = 'hello'), (needle = 'll'))); // 2
console.log(strStr((haystack = 'aaaaa'), (needle = 'bba'))); // -1
