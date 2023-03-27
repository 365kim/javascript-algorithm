/*
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * n개의 수 중 k개를 고르는 순열 경우의 수: n! / (n-k)!
 *
 * - 1 <= nums.length <= 6
 * - -10 <= nums[i] <= 10
 * - All the integers of nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const answer = [];

  recursive([], nums, answer);
  return answer;
};

function recursive(cur, rest, answer) {
  if (rest.length === 0) {
    answer.push(cur);
    return;
  }
  rest.forEach((n, i) => recursive([...cur, n], [...rest.slice(0, i), ...rest.slice(i + 1)], answer));
}

console.log(permute((nums = [1, 2, 3])));
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
