/* https://leetcode.com/problems/product-of-array-except-self/ */

var productExceptSelf = function (nums) {
  let product = 1;
  let zeroNum = 0;
  nums.forEach((v) => {
    if (v === 0) {
      zeroNum++;
      return;
    }
    product *= v;
  });
  if (zeroNum >= 2) {
    return nums.map((v) => 0);
  }
  if (zeroNum == 1) {
    return nums.map((v) => {
      if (v === 0) {
        return product;
      }
      return 0;
    });
  }
  return nums.map((v) => product / v);
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([0, 2, 3, 4])); // [24,0,0,0]
