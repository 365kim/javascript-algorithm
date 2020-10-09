/* https://leetcode.com/problems/deepest-leaves-sum/ */

let deepestLeavesSum = (rootNode) => {
  if (rootNode === null) return 0;

  let sums = new Array().fill(0); // [depth0, depth1, depth2, ...]
  let max = -1;
  let queue = new Array(); // [node, depth]
  queue.push([rootNode, 0]);

  while (queue.length) {
    let [curr, depth] = queue.shift();

    if (depth > max) {
      max = depth;
      sums[max] = 0; // 초기화
    }
    sums[depth] += curr.val;

    if (curr.left) queue.push([curr.left, depth + 1]);
    if (curr.right) queue.push([curr.right, depth + 1]);
  }

  return sums[max];
};

console.log(
  deepestLeavesSum(
    (rootNode = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8])
  )
);

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
