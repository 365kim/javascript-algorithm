/* https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/ */

var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((end + start) / 2);

  while (end - start > 1) {
    if (nums[start] > nums[mid]) {
      end = mid;
      mid = Math.floor((end + start) / 2);
      continue;
    }
    if (nums[mid] > nums[end]) {
      start = mid;
      mid = Math.floor((end + start) / 2);
      continue;
    }
    break;
  }
  return Math.min(nums[start], nums[end]);
};

console.log(findMin((nums = [3, 4, 5, 1, 2]))); // 1
console.log(findMin((nums = [4, 5, 6, 7, 0, 1, 2]))); // 0
console.log(findMin((nums = [11, 13, 15, 17]))); // 11
