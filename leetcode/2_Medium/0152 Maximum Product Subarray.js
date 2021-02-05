/* https://leetcode.com/problems/maximum-product-subarray/ */

var maxProduct = function (nums) {
  let result = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    const currMin = Math.min(nums[i], nums[i] * prevMin, nums[i] * prevMax);

    prevMax = currMax;
    prevMin = currMin;

    // log MaxProduct
    result = Math.max(result, currMax);
  }
  return result;
};

console.log(maxProduct([-2, 3, -4])); // 24
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
