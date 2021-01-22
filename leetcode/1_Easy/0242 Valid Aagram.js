/* https://leetcode.com/problems/valid-anagram/ */

var isAnagram = function (s, t) {
  let obj = {};

  if (s.length !== t.length) {
    return false;
  }
  for (let char of s) {
    obj[char] = obj[char] === undefined ? 1 : ++obj[char];
  }

  for (let char of t) {
    if (obj[char] === undefined || obj[char] < 1) {
      return false;
    }
    obj[char]--;
  }
  return true;
};

console.log(isAnagram((s = 'anagram'), (t = 'nagaram'))); //true
console.log(isAnagram((s = 'rat'), (t = 'car'))); //false
console.log(isAnagram((s = 'a'), (t = 'ab'))); //false
