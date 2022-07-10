/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */

var maxProfit = function (prices) {
  let maxProfit = 0;
  let priceOfBuying = prices[0];

  for (let priceOfToday of prices) {
    if (priceOfToday < priceOfBuying) {
      // buy
      priceOfBuying = priceOfToday;
    } else if (priceOfToday - priceOfBuying > maxProfit) {
      // sell
      maxProfit = priceOfToday - priceOfBuying;
    }
  }
  return maxProfit;
};

console.log(maxProfit((prices = [7, 1, 5, 3, 6, 4]))); // 5
console.log(maxProfit((prices = [7, 6, 4, 3, 1]))); // 0
