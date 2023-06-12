/**
 * Requirement: O(log n) time complexity
 * Solution: Binary Search
 *
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

console.log(findPeakElement([1, 2, 3, 1])) // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])) // 2 or 5
