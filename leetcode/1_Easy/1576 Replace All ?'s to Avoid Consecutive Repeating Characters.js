/* https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/ */

/*
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const res = s.split('');
  const alphas = new Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(97 + i));

  for (let i = 0; i < s.length; i++) {
    if (res[i] == '?') {
      res[i] = alphas.find((v) => {
        if (v !== (res[i - 1] || '') && v !== (res[i + 1] || '')) {
          return v;
        }
      });
    }
  }
  return res.join('');
};

console.log(modifyString((s = '?zs')));
console.log(modifyString((s = 'ubv?w')));
console.log(modifyString((s = 'j?qg??b')));
console.log(modifyString((s = '??yw?ipkj?')));
