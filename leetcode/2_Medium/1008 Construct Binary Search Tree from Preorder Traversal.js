/* https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/ */

let bstFromPreorder = (preorder) => {
  if (preorder.length === 0) {
    return null;
  }

  let root = new TreeNode(preorder.shift());
  while (preorder.length) {
    root = insertNode(root, preorder.shift());
  }

  return root;
};

function insertNode(curr, value) {
  if (curr === null) {
    return new TreeNode(value);
  }
  if (value < curr.val) {
    curr.left = insertNode(curr.left, value);
  } else {
    curr.right = insertNode(curr.right, value);
  }
  return curr;
}

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
