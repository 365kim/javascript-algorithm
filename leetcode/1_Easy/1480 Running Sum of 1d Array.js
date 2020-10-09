/* https://leetcode.com/problems/running-sum-of-1d-array/ */

var runningSum = function (nums) {
  let result = [];
  let tempSum = 0;
  for (let i = 0; i < nums.length; i++) {
    tempSum += nums[i];
    result.push(tempSum);
  }
  return result;
};
