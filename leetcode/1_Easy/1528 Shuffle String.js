/* https://leetcode.com/problems/shuffle-string/ */

var restoreString = function (s, indices) {
  let array = [];
  for (i of indices) {
    array[indices[i]] = s[i];
  }
  return array.join("");
};
