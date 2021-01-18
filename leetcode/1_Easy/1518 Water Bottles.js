/* https://leetcode.com/problems/water-bottles/ */

var numWaterBottles = function (numBottles, numExchange) {
  let numDrinking = numBottles;
  let numEmptyBottles = numDrinking;

  while (numEmptyBottles >= numExchange) {
    let quotient = Math.floor(numEmptyBottles / numExchange);
    let remainder = numEmptyBottles - numExchange * quotient;

    numEmptyBottles = quotient + remainder;
    numDrinking += quotient;
  }
  return numDrinking;
};

console.log(numWaterBottles(9,3));
console.log(numWaterBottles(15, 4));
console.log(numWaterBottles(5,5));
console.log(numWaterBottles(2,3));
