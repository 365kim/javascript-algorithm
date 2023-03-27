/*
 * Given an integer array nums of unique elements, return all possible 
subsets (the power set).
 * - The solution set must not contain duplicate subsets. Return the solution in any order.
 * - 1 <= nums.length <= 10
 * - -10 <= nums[i] <= 10
 * - All the numbers of nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  return nums.reduce((acc, cur) => [...acc, ...acc.map((arr) => [...arr, cur])], [[]]);
};

console.log(subsets((nums = [1, 2, 3])));
// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
