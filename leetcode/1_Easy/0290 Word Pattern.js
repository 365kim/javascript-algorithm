/* https://leetcode.com/problems/word-pattern/ */

var wordPattern = function(pattern, s) {
  let objOfPattern = {}
  let objOfString = {}
  let arrOfString = s.split(' ');

  if (pattern.length != arrOfString.length) {
    return false
  }
  for (let i in pattern) {
    if (objOfPattern[`${pattern[i]}`] === undefined && objOfString[`${arrOfString[i]}`] === undefined) {
      objOfPattern[`${pattern[i]}`] = arrOfString[i];
      objOfString[`${arrOfString[i]}`] = pattern[i];
    }
    //console.log(objOfPattern, objOfString);
    if (objOfPattern[`${pattern[i]}`] !== arrOfString[i]
    || objOfString[`${arrOfString[i]}`] !== pattern[i]) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern(pattern = "abba", s = "dog cat cat dog"));
console.log(wordPattern(pattern = "abba", s = "dog cat cat fish"));
console.log(wordPattern(pattern = "aaaa", s = "dog cat cat dog"));
console.log(wordPattern(pattern = "abba", s = "dog dog dog dog"));
console.log(wordPattern(pattern = "abc", s = "dog cat dog"));
console.log(wordPattern(pattern = "aaa", s = "aa aa aa aa"));
