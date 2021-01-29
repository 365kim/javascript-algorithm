/* https://leetcode.com/problems/reverse-vowels-of-a-string/ */

var reverseVowels = function (s) {
  let arr = [...s];
  let lowercaseVowels = ['a', 'e', 'i', 'o', 'u'];
  let uppercaseVowels = lowercaseVowels.map((v) => v.toUpperCase());
  let vowels = lowercaseVowels.concat(uppercaseVowels);
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let temp;

    while (!vowels.includes(arr[start]) && start <= end) {
      start++;
    }
    while (!vowels.includes(arr[end]) && start <= end) {
      end--;
    }
    if (start >= end) {
      break;
    }
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr.join('');
};

console.log(reverseVowels('hello')); // holle
console.log(reverseVowels('leetcode')); //leotcede
