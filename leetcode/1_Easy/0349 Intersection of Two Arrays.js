/* https://leetcode.com/problems/intersection-of-two-arrays/ */

var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let setA = set1.size < set2.size ? set1 : set2;
  let setB = set1.size < set2.size ? set2 : set1;
  let result = [];

  for (let element of setA) {
    if (setB.has(element)) {
      result.push(element);
    }
  }
  return result;
};

console.log(intersection((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])));
console.log(intersection((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
