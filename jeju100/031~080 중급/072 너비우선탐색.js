/*
그래프 탐색!
다음과 같이 입력이 주어질 때 
너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

출력예시
E D A F C B

※ 너비 우선 탐색 (BFS, Breadth First Search)
어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.
- 클래스로 구현
- 큐로 구현 (큐의 특징(FIFO) 때문에 자동으로 너비 우선 탐색)
*/

let myGraph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

const bfs = (graph, start) => {
  let visited = [];
  let queue = [start];

  while (queue.length) {
    let cur = queue.shift();
    if (!visited.includes(cur)) {
      visited.push(cur);
      let subs = graph[cur].filter((v) => !visited.includes(v));
      for (let sub of subs) {
        queue.push(sub);
      }
    }
  }
  return visited;
};

console.log(bfs(myGraph, "E"));
