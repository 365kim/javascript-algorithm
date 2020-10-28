/*
그래프 탐색!
다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때
깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

출력예시
E D F A C B


※ 깊이우선탐색 (DFS, Depth First Search)
목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색방법
- 클래스로 구현
- 스택으로 구현 : 스택의 특징(LIFO)에 의해 자동으로 깊이 우선 탐색
*/

let myGraph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

const dfs = (graph, start) => {
  let visited = [];
  let stack = [start];

  while (stack.length) {
    let cur = stack.pop();
    if (!visited.includes(cur)) {
      let subs = graph[cur].filter((v) => !visited.includes(v));
      visited.push(cur);
      for (let sub of subs) {
        stack.push(sub);
      }
    }
  }
  return visited;
};

console.log(dfs(myGraph, "E"));
