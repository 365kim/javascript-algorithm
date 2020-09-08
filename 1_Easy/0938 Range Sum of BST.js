/* https://leetcode.com/problems/range-sum-of-bst/ */

let rangeSumBST = (rootNode, L, R) => {
  if (rootNode === null) {
    return 0;
  }

  let sum = 0;
  let stack = new Array();
  stack.push(rootNode);

  while (stack.length) {
    let curr = stack.shift(); // current node
    if (curr === null) {
      continue;
    }

    if (curr.val >= L && curr.val <= R) {
      sum += curr.val;
    }
    if (curr.val > L) {
      stack.push(curr.left);
    }
    if (curr.val < R) {
      stack.push(curr.right);
    }
  }

  return sum;
};

console.log(
  rangeSumBST((rootNode = [10, 5, 15, 3, 7, null, 18]), (L = 7), (R = 15))
);

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
