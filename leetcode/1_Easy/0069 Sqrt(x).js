/* https://leetcode.com/problems/sqrtx/ */

var mySqrt = function (x) {
  return Math.floor(Math.pow(x, 1 / 2));
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(1));
console.log(mySqrt(0));
