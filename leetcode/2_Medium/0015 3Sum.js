/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = sorted.length - 1;

    while (j < k) {
      const sum = sorted[i] + sorted[j] + sorted[k];

      if (sum < 0) {
        while (sorted[j] === sorted[j + 1]) j++;
        j++;
      } else if (sum > 0) {
        while (sorted[k] === sorted[k - 1]) k--;
        k--;
      } else {
        // sum === 0
        results.push([sorted[i], sorted[j], sorted[k]]);

        while (sorted[i] === sorted[i + 1]) i++;
        while (sorted[j] === sorted[j + 1]) j++;
        j++;
        while (sorted[k] === sorted[k - 1]) k--;
        k--;
      }
    }
  }
  return results;
};

console.log(threeSum((nums = [-1, 0, 1, 2, -1, -4])));
console.log(threeSum((nums = [0, 1, 1])));
console.log(threeSum((nums = [0, 0, 0])));
