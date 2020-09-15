/* https://leetcode.com/problems/all-paths-from-source-to-target/ */

let allPathsSourceTarget = (graph) => {
  let answer = [];
  const followPath = (queue, n) => {
    if (n === graph.length - 1) {
      return answer.push(queue);
    }
    for (next of graph[n]) {
      let temp = queue.slice();
      temp.push(next);
      followPath(temp, next);
    }
  };

  followPath([0], 0);

  return answer;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
