/* https://leetcode.com/problems/power-of-two/ */

var isPowerOfTwo = function (n) {
  let num = n;

  if (num < 1) {
    return false;
  }
  while (num > 1) {
    num = num / 2;
  }
  if (num === 1) {
    return true;
  }
  return false;
};

console.log(isPowerOfTwo(-1)); // false
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(1 / 2)); // false
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
