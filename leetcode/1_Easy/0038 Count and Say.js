/* https://leetcode.com/problems/count-and-say/ */

var countAndSay = function (n) {
  let str = '1';
  let newStr;

  if (n === 1) {
    return str;
  }
  while (n > 1) {
    newStr = '';

    while (str.length > 0) {
      for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1 || str[i] !== str[i + 1]) {
          newStr += `${i + 1}${str[i]}`;
          str = str.slice(i + 1);
          break;
        }
      }
    }
    str = newStr;
    n--;
  }
  return newStr;
};

console.log(countAndSay((n = 1)));
console.log(countAndSay((n = 4))); //"1211"
console.log(countAndSay((n = 5))); //"111221"
/*
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
countAndSay(5) = say "1211" = one 1 + one 2 two 1 = "11" + "12" + "21" = "111221"
 */
