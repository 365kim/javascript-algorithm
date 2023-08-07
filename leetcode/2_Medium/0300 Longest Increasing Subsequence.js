/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const dp = new Array(nums.length).fill(1) // 나 자신

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const isIncreasing = nums[i] > nums[j]
      if (isIncreasing) {
        const a = dp[i] // 원래 값
        const b = dp[j] + 1 // j의 값 + 나 자신

        dp[i] = Math.max(a, b) // 더 큰 값으로 업데이트
      }
    }
  }
  return Math.max(...dp)
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
// Output: 4

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
// Output: 4

console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
// Output: 1
