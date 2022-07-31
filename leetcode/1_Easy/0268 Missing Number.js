/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const n = nums.length;
  const array = new Array(n + 1).fill().map(() => true);

  nums.forEach((num) => (array[num] = false));

  return array.findIndex(Boolean);
};

console.log(missingNumber((nums = [3, 0, 1]))); //2
console.log(missingNumber((nums = [0, 1]))); //2
console.log(missingNumber((nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]))); //8
