/*
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
*/

const checkIfSorted = (str) => {
  let arrOriginal = str.split(" ");
  let arrSorted = str.split(" ").sort((a, b) => a - b);

  if (
    arrOriginal.length === arrSorted.length &&
    arrOriginal.every((v, i) => v === arrSorted[i])
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

checkIfSorted("176 156 155 165 166 169");
checkIfSorted("155 156 165 166 169 176");

let arr1 = [3, 6, 5, "kim"];
let arr2 = [3, 6, 5, "kim"];
console.log(arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]));
// true
