# 하우투 in JS

### :rocket: 몇 자리 숫자인지 알아내기
- `num.toString().length`

  ```js
  let num = 1004;
  console.log(num.toString());
  // 1004
  console.log(num.toString().length);
  // 4
  ```

### :rocket: 변수 여러개 한 번에 초기화하기
- `let [a, b] = [1, 2]`

  ```js
  let [a, b, c, d] = [3, 6, 5, "kim"];
  console.log(a); // 3
  console.log(b); // 6
  console.log(c); // 5
  console.log(d); // kim
  ```

### :rocket: n개의 빈 배열을 가진 배열 선언하기
- `new Array(5).fill().map(() => [])`

  ```js
  console.log(new Array(5).fill().map(() => []));
  /// [ [], [], [], [], [] ]
  ```

### :rocket: 문자열 순서 뒤집기
- `[...str].reverse().join("")`

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

### :rocket: 숫자형 변수, 배열로 필요한 숫자 배열 재구성하기
- `[].concat(a, str.slice(n, m))`

  ```js
  let num = 3;
  let str = [4, 6, 5, 5];
  console.log([].concat(num));
  // [ 3 ]
  console.log([].concat(num, str.slice(1, 3)));
  // [ 3, 6, 5 ]

  ```

### :rocket: 연속된 순열 만들기
- `new Array(n).fill().map((v, i) => i);`

  ```js
  console.log(new Array(5).fill().map((v, i) => i + 1));
  /// [ 1, 2, 3, 4, 5 ]
  ```

### :rocket: 연속된 문자열 만들기
- `new Array(n).fill().map((v, i) => String.fromCharCode(ascii));`

  ```js
  console.log(new Array(5).fill().map((v, i) => String.fromCharCode(65 + i)));
  // [ 'A', 'B', 'C', 'D', 'E' ]
  console.log(new Array(5).fill().map((v, i) => String.fromCharCode(97 + i)));
  // [ 'a', 'b', 'c', 'd', 'e' ]
  ```

### :rocket: 문자열에서 a <=> b 교체하기
- `str.replace(/a/gi, "?").replace(/b)/gi, "a").replace(/\?/gi, "b"`
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

### 배열에서 중복되지 않은 요소 개수 세기
- `new Set(array.size)`

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

### :rocket: 깊은 복사
- `clone = JSON.parse(JSON.stringify(original));`

### :rocket: 계산기
- `function operate(a, b, op)`

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

### :rocket: 추가예정
- `prototype`

  ```js
  example
  ```
  
