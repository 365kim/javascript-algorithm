/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let curA = headA;

  while (curA) {
    let curB = headB;

    while (curB) {
      if (curA === curB) {
        return curA;
      }
      curB = curB.next;
    }

    curA = curA.next;
  }

  return null;
};

/**
 * @link https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1092898
 */

const getIntersectionNode2 = (headA, headB) => {
  let curA = headA;
  let curB = headB;

  while (curA !== curB) {
    curA = curA ? curA.next : headB;
    curB = curB ? curB.next : headA;
  }
  return curA;
};
