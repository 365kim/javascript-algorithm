/* https://leetcode.com/problems/valid-palindrome/ */

var isPalindrome = function (s) {
  let temp = s.replace(/ /g, '');
  let processedString = '';

  for (let char of temp) {
    let lowChar = char.toLowerCase();
    let lowCharCode = lowChar.charCodeAt(0);

    if (
      (lowCharCode >= 'a'.charCodeAt(0) && lowCharCode <= 'z'.charCodeAt(0)) ||
      (lowCharCode >= '0'.charCodeAt(0) && lowCharCode <= '9'.charCodeAt(0))
    ) {
      processedString += lowChar;
    }
  }
  //console.log(processedString);

  let len = processedString.length;
  let iteration = Math.floor(len / 2);
  for (let i = 0; i < iteration; i++) {
    if (processedString[i] !== processedString[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('"0P"'));
