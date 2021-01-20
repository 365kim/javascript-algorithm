/* https://leetcode.com/problems/maximum-subarray/ */

// Kadane’s Algorithm
var maxSubArray = function (arr) {
  let max_so_far = arr[0];
  let max_ending_here = arr[0];

  for (let i = 1; i < arr.length; i++) {
    max_ending_here = Math.max(arr[i], max_ending_here + arr[i]);
    max_so_far = Math.max(max_so_far, max_ending_here);
  }
  return max_so_far;
};

console.log(maxSubArray((arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4])));
console.log(maxSubArray((arr = [1])));
console.log(maxSubArray((arr = [0])));
console.log(maxSubArray((arr = [-1])));
console.log(maxSubArray((arr = [-100000])));
