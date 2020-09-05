/* https://leetcode.com/problems/xor-operation-in-an-array/ */

var xorOperation = function (n, start) {
  if (n === 1) return start;

  let nums = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i);
    result ^= nums[i];
  }

  return result;
};

console.log(xorOperation(5, 0));
