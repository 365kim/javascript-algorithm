/*
두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 
이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.
(단, 가중치 없음)

> 가까운 정점 먼저 방문 : BFS
> 거리를 증가시켜가면서 순회하다가 만나면 종료

입력
A F

출력
2
```
*/
let = myGraph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const shortestPath = (graph, start, end) => {
  let visited = [];
  let queue = [[start, 0]];

  while (queue.length) {
    let cur = queue.shift();
    if (!visited.includes(cur[0])) {
      visited.push(cur[0]);
      if (cur[0] == end) {
        return cur[1];
      }
      let subs = graph[cur[0]].filter((v) => !visited.includes(v));
      for (let sub of subs) {
        queue.push([sub, cur[1] + 1]);
      }
    }
  }
  return -1;
};

console.log(shortestPath(myGraph, "A", "F"));
