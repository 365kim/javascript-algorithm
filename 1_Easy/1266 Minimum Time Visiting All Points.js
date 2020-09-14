/* https://leetcode.com/problems/minimum-time-visiting-all-points/ */

let minTimeToVisitAllPoints = (points) => {
  let count = 0;
  let [x1, y1] = points.shift();
  while (points.length) {
    let [x2, y2] = points.shift();
    count += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    [x1, y1] = [x2, y2];
  }
  return count;
};

console.log(
  minTimeToVisitAllPoints(
    (points = [
      [1, 1],
      [3, 4],
      [-1, 0],
    ])
  )
);
