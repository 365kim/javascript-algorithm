/* https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

const lengthOfLongestSubstring = (s) => {
  let answerStr = "";
  if (s === "") {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    let temp = "";
    for (let j = i; j < s.length; j++) {
      if (temp.includes(s[j])) {
        break;
      }
      temp += s[j];
    }
    if (temp.length > answerStr.length) {
      answerStr = temp;
    }
  }

  return answerStr.length;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
