/* https://leetcode.com/problems/maximum-product-of-three-numbers/ */

var maximumProduct = function (nums) {
  let sorted = nums.slice().sort((a, b) => a - b);
  let len = sorted.length;

  return Math.max(
    sorted[0] * sorted[1] * sorted[2],
    sorted[0] * sorted[1] * sorted[len - 1],
    sorted[len - 1] * sorted[len - 2] * sorted[len - 3]
  );
};

console.log(maximumProduct((nums = [1, 2, 3])));
console.log(maximumProduct((nums = [1, 2, 3, 4])));
console.log(maximumProduct((nums = [-1, -2, -3])));
