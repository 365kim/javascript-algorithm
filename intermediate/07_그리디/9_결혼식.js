/*
대표적인 greedy 문제

현수는 다음 달에 결혼을 합니다.
현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다.

만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.
*/

const solution = (timelines) => {
  // 도착 이벤트와 떠나는 이벤트를 분리한다.
  let starts = timelines.map((v) => v[0]).sort((a, b) => a - b);
  let ends = timelines.map((v) => v[1]).sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;

  let sum = 0;
  let max = 0;

  while (p1 < starts.length) {
    if (starts[p1] < ends[p2]) {
      p1++;
      sum++;
      max = sum > max ? sum : max;
    } else if (starts[p1] === ends[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
      sum--;
    }
  }

  return max;
};

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
// 2

console.log(
  solution([
    [1, 10],
    [2, 8],
    [3, 9],
  ])
);
// 3
