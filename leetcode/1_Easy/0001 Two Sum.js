/* https://leetcode.com/problems/two-sum/ */

const twoSum = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9))); // [0, 1]
console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9))); // [0, 1]
