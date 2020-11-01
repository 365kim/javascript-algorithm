/*
'순열'이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.
'조합'이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경쓰지 않습니다.

한글의 자모 24자 중 자음은 총 14개입니다.
이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

<--요구 조건-->
1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
2. 두 번째 입력으로 조합의 수가 주어집니다.
3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.

입력
ㄱ,ㄴ,ㄷ,ㄹ
3

출력
['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
4
*/

// prev    arr                 push(curr)
// i == 0
// ""      ["A", "B", "C", "D"]    ["A"]
// "A"     ["B", "C", "D"]         ["AB"]
// "AB"    ["C", "D"]              ["ABC"]
// "ABC"   ["D"]                   ["ABCD"]
// i == 1
// ""      ["A", "B", "C", "D"]    ["B"]
// "B"     ["C", "D"]              ["BC"]
// "BC"    ["D"]                   ["BCD"]
// i == 2
// ""      ["A", "B", "C", "D"]    ["C"]
// "C"     ["D"]                   ["CD"]
// i == 3
// ""      ["A", "B", "C", "D"]    ["D"]

const nCr = (arr, r) => {
  let comb = [];

  const powerSet = (prev, arr) => {
    for (let i = 0; i < arr.length; i++) {
      curr = prev + arr[i];
      comb.push(curr);
      powerSet(curr, arr.slice(i + 1));
    }
  };

  powerSet("", arr);
  let result = comb.filter((x) => x.length === r);
  return [result, result.length];
};

console.log(nCr(["A", "B", "C", "D"], 3));

const powerset = (arr) => {
  let comb = [];

  const powerSet = (prev, arr) => {
    for (let i = 0; i < arr.length; i++) {
      curr = prev + arr[i];
      comb.push(curr);
      powerSet(curr, arr.slice(i + 1));
    }
  };
  powerSet("", arr);
  return comb;
};

console.log(powerset(["A", "B", "C", "D"]));
/*
[
  'A',    'AB',  'ABC',
  'ABCD', 'ABD', 'AC',
  'ACD',  'AD',  'B',
  'BC',   'BCD', 'BD',
  'C',    'CD',  'D'
]
*/
