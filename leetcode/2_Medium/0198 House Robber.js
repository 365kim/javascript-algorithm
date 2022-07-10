/**
 * @param {number[]} nums
 * @return {number}
 */

const rob = (nums) => {
  let totals = [];

  const recursive = (total, i) => {
    if (nums[i] == undefined) {
      totals.push(total);
      return;
    }

    recursive(total + nums[i], i + 2);

    if (nums[i + 1] !== undefined) {
      recursive(total + nums[i + 1], i + 3);
    }
  };

  recursive(0, 0);

  // console.log({ totals });

  return Math.max(...totals);
};

console.log(rob((nums = [1]))); // 1
console.log(rob((nums = [1, 1]))); // 1
console.log(rob((nums = [1, 2, 1]))); // 2
console.log(rob((nums = [1, 2, 2, 1]))); // 3

console.log(rob((nums = [1, 2, 3, 1]))); // 4
console.log(rob((nums = [2, 7, 9, 3, 1]))); // 12
console.log(rob((nums = [0, 3, 2, 0]))); // 3
console.log(rob((nums = [2, 8, 3, 1, 9]))); // 17
