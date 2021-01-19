/* https://leetcode.com/problems/unique-number-of-occurrences/ */

var uniqueOccurrences = function (arr) {
  let obj = {};
  let set;
  let reverseSet;

  for (let element of arr) {
    obj[element] = obj[element] === undefined ? 1 : ++obj[element];
  }

  set = new Set(Object.keys(obj));
  reverseSet = new Set(Object.values(obj));
  console.log(set);
  console.log(reverseSet);
  if (set.size !== reverseSet.size) {
    return false;
  }
  return true;
};

console.log(uniqueOccurrences((arr = [1, 2, 2, 1, 1, 3])));
console.log(uniqueOccurrences((arr = [1, 2])));
console.log(uniqueOccurrences((arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])));
