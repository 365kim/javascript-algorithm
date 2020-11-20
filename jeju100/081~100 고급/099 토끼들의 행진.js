/*
토끼들이 징검다리를 건너려고 합니다. 
하지만 돌이 부실해서 몇 번 건너지 못할 것 같습니다.
대기 중인 토끼들의 통과여부를 배열에 담아 출력해 주세요.

1. 각 돌들이 얼마나 버틸 수 있는지 배열로 주어집니다.

2. 토끼가 착지하면 해당 돌의 내구도는 1씩 줄어듭니다.
    ex) [1,2,1,4] 각 돌마다 1마리 2마리 1마리 4마리의 착지를 버틸 수 있습니다.

3. 토끼들은 점프력이 각자 다릅니다. 
    ex) [2,1] 첫 번째 토끼는 2칸씩, 두 번째 토끼는 1칸씩 점프합니다.

4. 각 토끼들은 순서대로 다리를 건넙니다.

입력
돌의내구도 = [1, 2, 1, 4, 5, 2]
토끼의점프력 = [2, 1, 3, 1]

처음  [1, 2, 1, 4, 5, 2]
토끼1 [1, 1, 1, 3, 5, 1]
토끼2 [0, 0, 0, 2, 4, 0]
토끼3 [0, 0, -1, 2, 4, 0] fail
토끼4 [-1, 0, 0, 2, 4, 0] fail

출력
['pass', 'pass', 'fail', 'fail']
*/

const solution = (stones, rabbits) => {
  let res = [];
  for (let jump of rabbits) {
    let pass = true;
    for (let i = jump - 1; i < stones.length; i += jump) {
      if (stones[i] <= 0) {
        pass = false;
        break;
      }
      stones[i]--;
    }
    pass ? res.push("pass") : res.push("fail");
  }
  return res;
};

console.log(solution([1, 2, 1, 4], [2, 1]));
// ['pass', 'pass']
console.log(solution([1, 2, 1, 4, 5, 2], [2, 1, 3, 1]));
// ['pass', 'pass', 'fail', 'fail']
