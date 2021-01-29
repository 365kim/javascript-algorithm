/* https://leetcode.com/problems/remove-duplicates-from-sorted-array/ */

var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

console.log(removeDuplicates((nums = [1, 1, 2])));
console.log(removeDuplicates((nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4])));
