/* https://leetcode.com/problems/create-target-array-in-the-given-order/ */

var createTargetArray = function (nums, index) {
  let target = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    target = [].concat(
      target.slice(0, index[i]),
      [nums[i]],
      target.slice(index[i])
    );
  }

  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
