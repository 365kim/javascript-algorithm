/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const INITIAL_VALUE = Infinity
const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(INITIAL_VALUE)

  dp[0] = 0 // 0원을 만들기 위한 동전의 개수는 0개

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      const a = dp[i] // coin 사용 X 경우
      const b = dp[i - coin] + 1 // coin 사용 O 경우

      dp[i] = Math.min(a, b) // 더 작은 값으로 업데이트
    }
  }

  if (dp[amount] === INITIAL_VALUE) {
    return -1
  }
  return dp[amount]
}

console.log(coinChange((coins = [1, 2, 5]), (amount = 11)))
//Output: 3

console.log(coinChange((coins = [2]), (amount = 3)))
// //Output: -1

console.log(coinChange((coins = [1]), (amount = 0)))
// //Output: 0

console.log(coinChange((coins = [1]), (amount = 1)))
// //Output: 1
