/* https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/ */

var groupThePeople = function (groupSizes) {
  let answer = [];

  let max = Math.max(...groupSizes);
  let temp = Array(max + 1).fill([]); // to cover index 'max'
  temp = JSON.parse(JSON.stringify(temp));

  let n = groupSizes.length;

  for (let i = n - 1; i >= 0; i--) {
    let size = groupSizes.pop();
    temp[size].push(i);

    if (temp[size].length == size) {
      answer.push(temp[size]);
      temp[size] = [];
    }
  }

  return answer;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
// console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
