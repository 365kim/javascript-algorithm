/* https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Constraints:
 * 1 <= k <= nums.length <= 105
 * -104 <= nums[i] <= 104
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 */
const findKthLargest = (nums, k) => {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  for (const n of nums) {
    min = Math.min(n, min)
    max = Math.max(n, max)
  }

  const len = max - min + 1 // min이 인덱스 0으로
  const frequencyArray = new Array(len).fill(undefined).map(() => 0)

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const _n = n - min // min값이 인덱스 0자리에 있어서 맞춰준다.

    frequencyArray[_n] = frequencyArray[_n] === undefined ? 1 : frequencyArray[_n] + 1
  }

  let i = 0 // array 맨 뒤부터 움직일 인덱스

  while (k > 0 && i < frequencyArray.length) {
    const _i = frequencyArray.length - 1 - i
    if (frequencyArray[_i] === 0) {
      i++
      continue
    }
    frequencyArray[_i] = frequencyArray[_i] - 1
    k--
  }

  return max - i // array 맨 뒤에서부터 움직였으니 max에서 i를 빼준다.
}

console.log(findKthLargest((nums = [3, 2, 1, 5, 6, 4]), (k = 2))) // 5
console.log(findKthLargest((nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]), (k = 4))) //4
console.log(findKthLargest((nums = [99, 99]), (k = 1))) // 99
console.log(findKthLargest((nums = [-1, 2, 0]), (k = 3))) // -1
