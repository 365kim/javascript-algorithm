/*
369 게임을 하는데 조금 이상한 규칙이 있습니다. 
3이나 6, 9 일 때만 박수를 쳐야합니다. 
예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 
36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

입력
'93'

출력
10
*/

/*
3, 6, 9       // (0*3) + 현재위치

33, 36, 39    // (1*3) + 현재위치
63, 66, 69    // (2*3) + 현재위치
93, 96, 99    // (3*3) + 현재위치

333, 336, 339 // ((1+3)*3) + 현재위치
633, 636, 639 // ((2+3)*3) + 현재위치
*/

const game369 = (n) => {
  let str = n.toString().split("");
  let answer = 0;
  let count = 1;

  for (let digit of str) {
    answer *= 3;
    if (digit < 3) answer += 0;
    else if (digit < 6) answer += 1;
    else if (digit < 9) answer += 2;
    else answer += 3;
  }

  return answer;
};

console.log(game369(33));
console.log(game369(34));
console.log(game369(35));
console.log(game369(36));
