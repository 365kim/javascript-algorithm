/* https://leetcode.com/problems/find-smallest-letter-greater-than-target/ */

var nextGreatestLetter = function (letters, target) {
  letters.sort((a, b) => a - b);
  for (let letter of letters) {
    if (letter > target) {
      return letter;
    }
  }
  return letters[0];
};

console.log(nextGreatestLetter((letters = ['c', 'f', 'j']), (target = 'a'))); //c
console.log(nextGreatestLetter((letters = ['c', 'f', 'j']), (target = 'c'))); //f
console.log(nextGreatestLetter((letters = ['c', 'f', 'j']), (target = 'd'))); //f
console.log(nextGreatestLetter((letters = ['c', 'f', 'j']), (target = 'g'))); //j
console.log(nextGreatestLetter((letters = ['c', 'f', 'j']), (target = 'j'))); //c
console.log(nextGreatestLetter((letters = ['c', 'f', 'j']), (target = 'k'))); //c
