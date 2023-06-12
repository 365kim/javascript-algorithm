/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      let start = mid
      let end = mid

      while (nums[start] === target) {
        start--
      }
      while (nums[end] === target) {
        end++
      }
      return [start + 1, end - 1]
    }
  }
  return [-1, -1]
}

console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 8)))
// [3,4]

console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 6)))
// [-1,-1]

console.log(searchRange((nums = []), (target = 0)))
// [-1,-1]

console.log(searchRange((nums = [1]), (target = 1)))
// [0,0]
