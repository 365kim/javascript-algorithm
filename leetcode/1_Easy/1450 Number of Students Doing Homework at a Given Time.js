/* https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/ */

let busyStudent = (startTime, endTime, queryTime) => {
  return startTime.filter((v, i) => v <= queryTime && endTime[i] >= queryTime)
    .length;
};

console.log(
  busyStudent((startTime = [1, 2, 3]), (endTime = [3, 2, 7]), (queryTime = 4))
);
