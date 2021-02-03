/* https://leetcode.com/problems/destination-city/ */

var destCity = function (paths) {
  let pathObj = {};
  let startCity = paths[0][0];

  for (let path of paths) {
    pathObj[path[0]] = path[1];
  }
  while (true) {
    let endCity = pathObj[startCity];
    if (pathObj[startCity] === undefined) {
      break;
    }
    startCity = endCity;
  }
  return startCity;
};

console.log(
  destCity(
    (paths = [
      ['London', 'New York'],
      ['New York', 'Lima'],
      ['Lima', 'Sao Paulo'],
    ])
  )
);
console.log(
  destCity(
    (paths = [
      ['B', 'C'],
      ['D', 'B'],
      ['C', 'A'],
    ])
  )
);
