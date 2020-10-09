/* https://leetcode.com/problems/increasing-decreasing-string/ */

let sortString = (s) => {
  let arr = Array.from(s).sort();
  let ans = "";
  let lastChar = "";

  while (arr.length) {
    arr = arr.filter((v, i) => {
      if (i === 0 || v !== lastChar) {
        ans += v;
        lastChar = v;
        return false;
      }
      return true;
    });
    arr.reverse();
  }
  return ans;
};

console.log(sortString((s = "bbbbaaaacccc")));
//abc cba abc cba
