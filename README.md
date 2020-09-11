# 하우투 in JS

### :rocket: 숫자형 자릿수 구하기
- `num.toString().length;`

  ```js
  let num = 1004;
  console.log(num.toString());
  // 1004
  console.log(num.toString().length);
  // 4
  ```
<br>

### :rocket: 변수 여러개 한 번에 초기화하기
- `let [a, b] = [1, 2]`

  ```js
  let [a, b, c, d] = [3, 6, 5, "kim"];
  console.log(a); // 3
  console.log(b); // 6
  console.log(c); // 5
  console.log(d); // kim
  ```
- :point_right: `[a,b] === [1,2]` 와 같은 비교는 할 수 없음
<br>

### :rocket: n개의 빈 배열을 가진 배열 선언하기
- `new Array(n).fill().map(() => []);`

  ```js
  console.log(new Array(5).fill().map(() => []));
  /// [ [], [], [], [], [] ]
  ```
<br>

### :rocket: 배열 순서 뒤집기
- `array.reverse();`
  ```
  console.log([1, 2, 3].reverse());
  // [ 3, 2, 1 ]
  ```
<br>

### :rocket: 문자열 순서 뒤집기
- `[...str].reverse().join("");`

  ```js
  console.log([..."365kim"]);
  // [ '3', '6', '5', 'k', 'i', 'm' ]

  console.log([..."365kim"].reverse());
  // ['m', 'i', 'k', '5', '6', '3']

  console.log([..."365kim"].reverse().join());
  // m,i,k,5,6,3

  console.log([..."365kim"].reverse().join(""));
  // mik563
  ```
<br>

### :rocket: 숫자형 변수, 배열로 필요한 숫자 배열 재구성하기
- `[].concat(a, str.slice(n, m));`

  ```js
  let num = 3;
  let str = [4, 6, 5, 5];
  console.log([].concat(num));
  // [ 3 ]
  console.log([].concat(num, str.slice(1, 3)));
  // [ 3, 6, 5 ]

  ```
<br>

### :rocket: 연속된 순열 만들기
- `new Array(n).fill().map((v, i) => i);`

  ```js
  console.log(new Array(5).fill().map((v, i) => i + 1));
  /// [ 1, 2, 3, 4, 5 ]
  ```
<br>

### :rocket: 연속된 문자열 만들기
- `new Array(n).fill().map((v, i) => String.fromCharCode(ascii));`

  ```js
  console.log(new Array(5).fill().map((v, i) => String.fromCharCode(65 + i)));
  // [ 'A', 'B', 'C', 'D', 'E' ]
  console.log(new Array(5).fill().map((v, i) => String.fromCharCode(97 + i)));
  // [ 'a', 'b', 'c', 'd', 'e' ]
  ```
<br>

### :rocket: 문자열에서 a <=> b 교체하기
- `str.replace(/a/gi, "?").replace(/b)/gi, "a").replace(/\?/gi, "b");`
  - g : global
  - i : case-insensitive

  ```js
  console.log(")365kim(");
  // )365kim(
  console.log(")365kim(".replace(/\(/gi, "a"));
  // )365kima
  console.log(")365kim(".replace(/\(/gi, "a").replace(/\)/gi, "("));
  // (365kima
  console.log(
    ")365kim(".replace(/\(/gi, "a").replace(/\)/gi, "(").replace(/a/gi, ")")
  );
  // (365kim)
  ```
<br>

### 배열에서 중복되지 않은 요소 개수 세기
- `new Set(array.size);`

  ```js
  console.log(new Set([1, 1, 2]));
  // Set { 1, 2 }
  console.log(new Set([1, 1, 2]).size);
  // 2
  console.log(new Set([1, 1, 2]).add(3));
  // Set { 1, 2, 3 }
  console.log(new Set([1, 1, 2]).add(3).size);
  // 3
  ```
<br>

### 1차원 배열에서 특정 요소만 삭제하기
- `array.splice(array.indexOf(target), 1)`

  ```js
  let array = ["365", "js", "kim"];
  let i = array.indexOf("js");
  console.log(i);
  // 1
  console.log(array.splice(i, 1));
  // [ 'js' ]
  console.log(array);
  // [ '365', 'kim' ]
  ```
<br>

### 2차원 배열에서 특정 요소만 삭제하기
- `array.splice(array.findIndex(list) => f(list))`


  ```js
  let array = [  [3, 6, 5],  ["j", "s"],  ["k", "i", "m"], ];
  let i = array.findIndex((list) => list[0] === "j" && list[1] === "s");
  console.log(i);
  // 1
  console.log(array.splice(i, 1));
  // [ [ 'j', 's' ] ]
  console.log(array);
  // [ [ 3, 6, 5 ], [ 'k', 'i', 'm' ] ]
  ```
- :point_right: `indexOf(["j", "s"])`로는 찾을 수 없음.
<br>

### :rocket: 깊은 복사
- `clone = JSON.parse(JSON.stringify(original));`
<br>

### :rocket: 계산기
- `function operate(a, b, op);`

  ```js
  function operate(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  }
  ```
<br>

### :rocket: 비트연산 이용해서 모든 부분집합 만들기
- `function powerSet(n);`

  ```js
    let comb = [];
    for (let i = 0; i < 1 << n; i++) { // 000...0부터 111...1까지
      let item = "";
      for (let j = 0; j < n; j++) {
        if ((i & (1 << j)) !== 0) { // And연산
          item += j;
        }
      }
      combination.push(item);
    }
  ```


<br>
### :rocket: 추가예정
- `prototype`

  ```js
  example
  ```
  
