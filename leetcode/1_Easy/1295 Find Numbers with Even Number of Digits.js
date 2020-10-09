/* https://leetcode.com/problems/find-numbers-with-even-number-of-digits/ */

const findNumbers = function (nums) {
  return nums.filter((v) => v.toString().length % 2 === 0).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
