/*
우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다. 

최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.
(단, 가중치 없음)

입력
1 7

출력
6
*/

// 강의를 다시보자!!!

let graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

const solution = (graph) => {
  let queue = []; // 경로

  let answers = [];
  let start = 1;
  let end = 7;
  queue.push([[], start]);

  while (queue.length) {
    let [visited, cur] = queue.shift(); // 문제지점

    if (visited.includes(cur)) {
      continue;
    }

    visited.push(cur);

    if (cur == end) {
      answers.push(visited);
      continue;
    }

    console.log(cur, graph[cur]);
    let nexts = graph[cur].filter((v) => !visited.includes(v));
    console.log(nexts);
    for (let next of nexts) {
      queue.push([visited, next]); // 문제지점
    }
  }

  let result = answers.sort((a, b) => b.length - a.length)[0];
  return `최장경로 : ${result}, 카운트 : ${result.length} `;
};
console.log(solution(graph));

/*
const solution = (graph) => {
  let queue = []; // 경로
  let answers = [];
  let start = 1;
  let end = 7;
  let top = 0;

  queue.push([[], start]);

  for (let i = 0; i <= top; i++) {
    let [visited, cur] = queue[i];

    if (visited.includes(cur)) {
      continue;
    }

    visited.push(cur);

    if (cur == end) {
      answers.push(visited);
      continue;
    }

    console.log(cur, graph[cur]);
    let nexts = graph[cur].filter((v) => !visited.includes(v));
    console.log(nexts);
    for (let next of nexts) {
      queue[top] = [visited, next];
      top++;
    }
  }

  let result = answers.sort((a, b) => b.length - a.length)[0];
  return `최장경로 : ${result}, 카운트 : ${result.length} `;
};
console.log(solution(graph));

*/
