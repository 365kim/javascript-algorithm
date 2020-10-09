/* https://leetcode.com/problems/decompress-run-length-encoded-list/ */

var decompressRLElist = function (nums) {
  let result = [];
  let len = nums.length;
  for (let i = 0; i < len / 2; i++) {
    result.push(...Array(nums[2 * i]).fill(nums[2 * i + 1]));
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([1, 1, 2, 3]));
