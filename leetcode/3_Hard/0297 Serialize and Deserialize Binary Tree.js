/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

const serialize = function (root) {
  let result = [];
  let curs = [{ node: root, index: 0 }];

  while (true) {
    let nexts = [];

    if (curs.every((v) => v.node === null)) {
      return result.map((v) => (v === null ? 'null' : v)).join();
    }

    for (let cur of curs) {
      let { node, index } = cur;

      result[index] = node?.val ?? null;

      nexts.push({ node: node?.left ?? null, index: 2 * index + 1 });
      nexts.push({ node: node?.right ?? null, index: 2 * index + 2 });
    }

    curs = nexts;
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

const deserialize = function (data) {
  if (data === '') {
    return null;
  }
  let values = data.split(',').map((v) => (v === 'null' ? null : v));
  let root = new TreeNode(values[0]);
  let curs = [{ node: root, index: 0 }];

  while (true) {
    let nexts = [];

    if (curs.every((v) => v.node === null)) {
      return root;
    }

    for (let cur of curs) {
      let { node, index } = cur;

      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      if (values[leftIndex] !== undefined && values[leftIndex] !== null && leftIndex < values.length) {
        node.left = new TreeNode(values[leftIndex]);
        nexts.push({ node: node?.left ?? null, index: leftIndex });
      }

      if (values[rightIndex] !== undefined && values[rightIndex] !== null && rightIndex < values.length) {
        node.right = new TreeNode(values[rightIndex]);
        nexts.push({ node: node?.right ?? null, index: rightIndex });
      }
    }

    curs = nexts;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
