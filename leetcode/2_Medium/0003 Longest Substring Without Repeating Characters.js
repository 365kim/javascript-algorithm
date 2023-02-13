/* https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let candidate = '';
  let max = 0;

  for (const char of s) {
    if (candidate.includes(char)) {
      const index = candidate.lastIndexOf(char);
      candidate = candidate.slice(index + 1) + char;
    } else {
      candidate += char;
    }
    max = Math.max(max, candidate.length);
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('pwwkew')); // 3
