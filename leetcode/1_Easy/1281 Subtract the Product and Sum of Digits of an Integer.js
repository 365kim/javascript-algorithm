/* https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/ */

var subtractProductAndSum = function (n) {
  let array = n.toString().split("");
  let product = 1;
  let sum = 0;

  for (i of array) {
    product = product * i;
    sum = sum + +i; // convert to Number to avoid String operation
  }

  return product - sum;
};
