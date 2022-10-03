/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJump = (nums) => {
  const pushed = Array(nums)
    .fill(undefined)
    .map(() => false);
  const stack = [0];

  pushed[0] = true;

  while (stack.length > 0) {
    const current = stack.shift();
    const maxJump = nums[current];

    if (current === nums.length - 1) return true;

    for (let j = 1; j <= maxJump; j++) {
      const nextIndex = current + j;

      if (pushed[nextIndex]) continue;

      stack.push(nextIndex);
      pushed[nextIndex] = true;
    }
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0, 2, 3])); // false
console.log(canJump([0])); // true
