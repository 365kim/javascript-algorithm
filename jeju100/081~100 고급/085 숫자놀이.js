/*
일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.

이 놀이는 1부터 시작합니다.
다음 수는 1이 1개이기 때문에 '11'이 되고,
 '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.

즉,
1. 1  → (1)
2. 11 → (1이 1개)
3. 12 → (1이 2개)
4. 1121 → (1이 1개 2가 1개)
5. 1321 → (1이 3개 2가 1개)
6. 122131 → (1이 2개 2가 1개 3이 1개)
7. 132231 → (1이 3개 2가 2개 3이 1개)
8. 122232
9. 112431

위와 같이 진행되는 규칙을 통해 진행횟수 N을 입력받으면 해당되는 수를 출력하세요.

*/

const game = (turn) => {
  let res = "1";
  for (let i = 2; i <= turn; i++) {
    let score = new Object();

    for (let j of res) {
      score[j] = ++score[j] || 1;

      let temp = "";
      for (let j in score) {
        if (score[j] > 0) {
          temp += j + score[j];
        }
      }
      res = temp;
    }
  }
  return res;
};

console.log(game(3)); //12
console.log(game(4)); //1121
console.log(game(5)); //1321
console.log(game(6)); //122131
console.log(game(7)); //132231

/*
번외문제
1부터 10000까지 8의 갯수 세기
*/
let result = "";
for (let i = 1; i <= 10000; i++) {
  result += i;
}
console.log(result.match(/8/g).length);
