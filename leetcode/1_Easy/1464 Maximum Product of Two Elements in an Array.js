/* https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/ */

let maxProduct = (nums) => {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};

console.log(maxProduct((nums = [3, 4, 5, 2])));
