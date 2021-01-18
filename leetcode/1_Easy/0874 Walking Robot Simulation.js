/* https://leetcode.com/problems/walking-robot-simulation/ */

var robotSim = function (commands, obstacles) {
  let [x, y] = [0, 0];
  let weightOfX = [0, 1, 0, -1];
  let weightOfY = [1, 0, -1, 0];
  let dir = 0;
  let objectOfObstacles = {};
  let max = 0;

  for (let obs of obstacles) {
    objectOfObstacles[obs] = true;
  }
  for (let k of commands) {
    if (k === -2) {
      dir = (dir - 1 + 4) % 4;
      continue;
    }
    if (k === -1) {
      dir = (dir + 1) % 4;
      continue;
    }
    while (k > 0) {
      x = x + weightOfX[dir];
      y = y + weightOfY[dir];

      if (objectOfObstacles[`${x},${y}`]) {
        x = x - weightOfX[dir];
        y = y - weightOfY[dir];
        break;
      }
      k--;
    }
    max = Math.max(max, Math.pow(x, 2) + Math.pow(y, 2));
  }
  return max;
};

console.log(robotSim((commands = [4, -1, 3]), (obstacles = [])));
console.log(robotSim((commands = [4, -1, 4, -2, 4]), (obstacles = [[2, 4]])));
