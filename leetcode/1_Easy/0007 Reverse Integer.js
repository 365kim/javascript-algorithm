/* https://leetcode.com/problems/reverse-integer/ */

var reverse = function (x) {
  let strX = x.toString().split('');
  let result = '';

  if (strX[0] === '-') {
    result += '-';
    strX = strX.slice(1);
  }
  result += +strX.reverse().join('');
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
};

console.log(reverse((x = 123)));
console.log(reverse((x = -123)));
console.log(reverse((x = 120)));
console.log(reverse((x = 0)));
console.log(reverse((x = 1534236469)));
