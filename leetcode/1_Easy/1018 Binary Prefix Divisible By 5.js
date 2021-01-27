/* https://leetcode.com/problems/binary-prefix-divisible-by-5/  */

var prefixesDivBy5 = function (A) {
  let curr = 0;
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    curr = (curr * 2 + A[i]) % 5;
    answer.push(curr === 0);
  }
  return answer;
};

console.log(prefixesDivBy5([0, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1]));
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1, 0, 1]));
console.log(prefixesDivBy5([0, 1, 1, 1, 1]));
