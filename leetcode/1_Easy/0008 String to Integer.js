/* https://leetcode.com/problems/longest-common-prefix/ */

/**
 * @param {string} s
 * @return {number}
 */

// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

const myAtoi = (s) => {
  let i = 0;

  // 1. Read in and ignore any leading whitespace.
  while (s[i] === ' ') {
    i++;
  }

  // 2. Check if the next character  is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively.
  let signFactor = +1;
  if (s[i] === '+') {
    i++;
    signFactor = +1;
  } else if (s[i] === '-') {
    i++;
    signFactor = -1;
  }

  if (s[i] === undefined) {
    return 0;
  }

  // 3. Read in next the characters until the next non-digit character or the end of the input is reached
  let digits = '';

  while (s[i] === '0') {
    i++;
  }
  // 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32)
  while (s[i] >= '0' && s[i] <= '9') {
    digits += s[i];
    i++;
  }
  const number = Number(digits);

  // Change the sign as necessary.
  let signedNumber = number * signFactor;

  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  const RANGE = Math.pow(2, 32);

  if (signedNumber > MAX) {
    return MAX;
  }
  if (signedNumber < MIN) {
    return MIN;
  }
  return signedNumber;
};

// console.log(myAtoi('42')); // 42
// console.log(myAtoi('         -42')); // -42
// console.log(myAtoi('4193')); // 4193
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi('words and 987')); // 0;
