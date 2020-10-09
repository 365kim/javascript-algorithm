/* https://leetcode.com/problems/maximum-69-number/ */

let maximum69Number = (num) => {
  let numStr = num.toString();
  let idx6 = numStr.indexOf(6);
  if (idx6 === -1) {
    return num;
  }
  return Number(numStr.replace("6", "9"));
};

console.log(maximum69Number((num = 9669)));
