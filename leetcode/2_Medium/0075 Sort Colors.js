/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Bubble Sort
const sortColors = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  console.log(nums);
};

console.log(sortColors((nums = [2, 0, 2, 1, 1, 0]))); // [0, 0, 1, 1, 2, 2]
console.log(sortColors((nums = [2, 0, 1]))); // [0,1,2]
