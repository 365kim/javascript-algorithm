/*
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 
시간복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

아래 코드의 빈 칸을 채워 버블정렬을 완성해 봅시다.
*/

const bubbleSort = (arr) => {
  let res = arr.slice(); // 깊은 복사

  for (let i = 0; i < res.length - 1; i++) {
    for (let j = 0; j < res.length - i; j++) {
      if (res[j] > res[j + 1]) {
        let temp = res[j];
        res[j] = res[j + 1];
        res[j + 1] = temp;
      }
    }
  }
  return res;
};

const betterBubbleSort = (arr) => {
  let len = arr.length - 1;
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

console.log(bubbleSort([5, 4, 7, 9, 1, 3]));
console.log(betterBubbleSort([5, 4, 7, 9, 1, 3]));
