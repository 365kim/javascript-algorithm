/* https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/ */

var smallerNumbersThanCurrent = function (nums) {
  let sortedNums = nums.slice().sort((a, b) => a - b);
  let result = [];

  for (let num of nums) {
    result.push(sortedNums.indexOf(num));
  }

  return result;
};
