/*
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

const sumEachDigit = (a, b) => {
  let nStr = "";
  let result = 0;

  for (let i = a; i <= b; i++) {
    nStr += i;
  }
  console.log(nStr);
  let nSplit = nStr.split("");
  for (digit of nSplit) {
    result += +digit;
  }
  return result;
};

console.log(sumEachDigit(10, 15));
console.log(sumEachDigit(1, 20));
