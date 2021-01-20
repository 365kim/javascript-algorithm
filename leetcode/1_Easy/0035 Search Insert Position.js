/* https://leetcode.com/problems/search-insert-position/ */

var searchInsert = function (nums, target) {
  let idx = nums.indexOf(target);

  if (idx !== -1) {
    return idx;
  }
  for (idx = 0; idx < nums.length; idx++) {
    if (nums[idx] > target) {
      break;
    }
  }
  return idx;
};

console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 5)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 2)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 7)));
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 0)));
console.log(searchInsert((nums = [1]), (target = 0)));
