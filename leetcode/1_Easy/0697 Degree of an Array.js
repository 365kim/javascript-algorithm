/* https://leetcode.com/problems/degree-of-an-array/ */

class Elem {
  constructor(firstIndex) {
    this.count = 1;
    this.firstIndex = firstIndex;
    this.lastIndex = firstIndex;
  }

  getLength = () => {
    return this.lastIndex - this.firstIndex + 1;
  };

  recordOccurence = (index) => {
    this.count++;
    this.lastIndex = index;
  };
}

var findShortestSubArray = function (nums) {
  let mostFrequentElement = nums[0];
  let maxFrequency = 0;
  let obj = {};

  nums.forEach((v, i) => {
    if (obj[v] === undefined) {
      obj[v] = new Elem(i);
    } else {
      obj[v].recordOccurence(i);
    }
    if (
      maxFrequency < obj[v].count ||
      (maxFrequency === obj[v].count &&
        obj[v].getLength() < obj[mostFrequentElement].getLength())
    ) {
      maxFrequency = obj[v].count;
      mostFrequentElement = v;
    }
  });
  return obj[mostFrequentElement].getLength();
};

console.log(findShortestSubArray((nums = [1, 2, 3, 4])));
console.log(findShortestSubArray((nums = [1, 2, 2, 3, 1])));
console.log(findShortestSubArray((nums = [1, 2, 2, 3, 1, 4, 2])));
console.log(
  findShortestSubArray((nums = [2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2]))
);
