/* https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/ */

let sumEvenGrandparent = (rootNode) => {
  if (rootNode === null) return 0;

  let queue = new Array();
  let sum = 0;

  queue.push([rootNode, false, false]); //[rootNode, parentEven, grandParentEven]
  while (queue.length) {
    let [curr, parentEven, grandParentEven] = queue.shift();
    if (grandParentEven === true) {
      sum += curr.val;
    }
    let currEven = !(curr.val % 2);
    if (curr.left) {
      queue.push([curr.left, currEven, parentEven]);
    }
    if (curr.right) {
      queue.push([curr.right, currEven, parentEven]);
    }
  }
  return sum;
};

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
