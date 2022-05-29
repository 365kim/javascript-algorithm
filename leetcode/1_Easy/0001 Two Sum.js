/* https://leetcode.com/problems/two-sum/ */

const twoSum = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9))); // [0, 1]
console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9))); // [0, 1]

// O(n)
function twoSum2(nums, target) {
  const map = new Map(); // <value, index>

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];

    if (map.has(remainder)) {
      const j = map.get(remainder);
      return [j, i];
    }

    map.set(nums[i], i);
  }
}
