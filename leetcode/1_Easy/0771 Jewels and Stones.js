/* https://leetcode.com/problems/jewels-and-stones/ */

var numJewelsInStones = function (J, S) {
  let count = 0;
  for (stone of S) {
    if (J.indexOf(stone) != -1) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
