/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

var maxProfit = function (prices) {
  let maxProfit = 0;
  let priceOfBuying = prices[0];

  for (let priceOfToday of prices) {
    priceOfBuying = Math.min(priceOfToday, priceOfBuying);
    maxProfit = Math.max(priceOfToday - priceOfBuying, maxProfit);
  }
  return maxProfit;
};

console.log(maxProfit((prices = [7, 1, 5, 3, 6, 4]))); // 5
console.log(maxProfit((prices = [7, 6, 4, 3, 1]))); // 0
