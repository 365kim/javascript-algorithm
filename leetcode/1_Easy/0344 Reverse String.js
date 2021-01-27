/* https://leetcode.com/problems/reverse-string/ */

var reverseString = function (s) {
  //  return s.reverse();

  let iterationNum = Math.floor(s.length / 2);

  for (let i = 0; i < iterationNum; i++) {
    let temp = s[i];

    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};

console.log(reverseString((Input = ['h', 'e', 'l', 'l', 'o'])));
console.log(reverseString((Input = ['H', 'a', 'n', 'n', 'a', 'h'])));
