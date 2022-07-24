/**
 * @param {number} n
 * -231 <= n <= 231 - 1
 * @return {boolean}
 */

const isPowerOfThree = (n) => {
  if (n <= 0) return false;

  while (n > 1) {
    n /= 3;
  }
  while (n < 1) {
    n *= 3;
  }

  return n === 1;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
