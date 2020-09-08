/* https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let getTargetCopy = (original, cloned, target) => {
  if (original === null || cloned === null) {
    return null;
  }

  let queue = [];
  queue.push(cloned);
  while (queue.length) {
    let curr = queue.shift();

    if (curr.val === target.val) {
      return curr;
    }
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return null;
};

console.log(getTargetCopy((tree = [7, 4, 3, null, null, 6, 19]), (target = 3)));
