/* https://leetcode.com/problems/add-strings/ */

var addStrings = function (num1, num2) {
  let result = '';
  let len1 = num1.length;
  let len2 = num2.length;
  let carryflag = 0;

  for (let i = 0; i < num1.length || i < num2.length; i++) {
    let sum =
      (+num1[len1 - 1 - i] || 0) + (+num2[len2 - 1 - i] || 0) + carryflag;

    if (sum >= 10) {
      carryflag = 1;
      sum -= 10;
    } else {
      carryflag = 0;
    }
    result += sum;
  }
  if (carryflag === 1) {
    result += carryflag;
  }
  console.log(result);
  return result.split('').reverse().join('');
};

console.log(addStrings((num1 = '9333852702227987'), (num2 = '85731737104263')));
