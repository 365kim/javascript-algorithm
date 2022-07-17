class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  reset() {
    return this.nums;
  }

  shuffle() {
    let shuffled = [];
    let clone = [...this.nums];

    while (clone.length > 0) {
      const randomIndex = Math.floor(Math.random() * clone.length);
      const randomElement = clone.splice(randomIndex, 1);

      shuffled.push(randomElement);
    }

    return shuffled;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
