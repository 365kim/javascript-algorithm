/* https://leetcode.com/problems/binary-search/ */

const search = (nums, target) => {
  let s = 0
  let e = nums.length - 1

  while (s <= e) {
    const mid = Math.floor((s + e) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      s = mid + 1
    } else {
      e = mid - 1
    }
  }

  return -1
}

console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 9)))
console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 2)))
console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 12)))
console.log(search((nums = [-1]), (target = 2)))
console.log(search((nums = [-1]), (target = -1)))
console.log(search((nums = [-1]), (target = -3)))
