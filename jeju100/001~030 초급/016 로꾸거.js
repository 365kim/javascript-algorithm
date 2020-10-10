/*
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거
*/

// 문자열을 뒤집는 함수는 없지만, 배열을 뒤집는 함수는 있음
// 문자열을 배열로 변환해서 뒤집은 후 다시 문자열로 변환하기
let str = "거꾸로";

console.log(str.split());
// [ '거꾸로' ]
console.log(str.split(""));
// [ '거', '꾸', '로' ]
console.log(str.split("").reverse());
// [ '로', '꾸', '거' ]
console.log(str.split("").reverse().join());
// 로,꾸,거
console.log(str.split("").reverse().join(""));
// 로꾸거
