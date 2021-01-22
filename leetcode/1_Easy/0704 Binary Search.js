/* https://leetcode.com/problems/binary-search/ */

var search = function (nums, target) {
  let front = 0;
  let end = nums.length - 1;
  let idx = Math.floor((front + end) / 2);

  while (end - front > 1) {
    if (nums[idx] < target) {
      front = idx;
    } else {
      end = idx;
    }
    idx = Math.floor((front + end) / 2);
  }
  if (nums[front] === target) {
    return front;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
};

console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 9)));
console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 2)));
console.log(search((nums = [-1]), (target = 2)));
console.log(search((nums = [-1]), (target = -1)));
console.log(search((nums = [-1]), (target = -3)));
