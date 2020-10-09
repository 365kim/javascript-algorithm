/*
다음 코드의 출력 값으로 알맞은 것은?

1)  10
2)  12
3)  14
4)  16 <- 정답
*/

let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b);
