/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) => {
  let max = nums[0];
  let subSum = 0;

  for (let num of nums) {
    if (subSum + num < num) {
      subSum = num;
    } else {
      subSum += num;
    }
    if (subSum > max) {
      max = subSum;
    }
  }
  return max;
};

console.log(maxSubArray((nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]))); // 6
console.log(maxSubArray((nums = [1]))); // 1
console.log(maxSubArray((nums = [5, 4, -1, 7, 8]))); // 23
console.log(maxSubArray((nums = [-2, 1]))); // 1
console.log(maxSubArray((nums = [2, 1]))); // 3
console.log(maxSubArray((nums = [-2, -1]))); // -1
