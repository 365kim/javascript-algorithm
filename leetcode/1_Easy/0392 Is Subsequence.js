/* https://leetcode.com/problems/is-subsequence/ */

//0 <= s.length <= 100
//0 <= t.length <= 10^4
var isSubsequence = function (s, t) {
  let target = t.slice();

  for (let char of s) {
    let idx = target.indexOf(char);
    //console.log('char', char, 'idx', idx);

    if (idx === -1) {
      return false;
    }
    target = target.slice(idx + 1);
    //console.log(target);
  }
  return true;
};

console.log(isSubsequence((s = 'abc'), (t = 'ahbgdc'))); //true
console.log(isSubsequence((s = 'axc'), (t = 'ahbgdc'))); //false
console.log(isSubsequence((s = 'acb'), (t = 'ahbgdc'))); //false
console.log(isSubsequence((s = 'aaaaaa'), (t = 'bbaaaaa'))); //false
