/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const oddEvenList = (head) => {
  let rootOdd = null;
  let curOdd = null;

  let rootEven = null;
  let curEven = null;

  let cur = head;
  let index = 1;

  while (cur) {
    if (index % 2 === 1) {
      // odd
      if (rootOdd === null) {
        rootOdd = cur;
        curOdd = rootOdd;
      } else {
        curOdd.next = cur;
        curOdd = curOdd.next;
      }
    } else {
      //even
      if (rootEven === null) {
        rootEven = cur;
        curEven = rootEven;
      } else {
        curEven.next = cur;
        curEven = curEven.next;
      }
    }

    index++;
    cur = cur.next;
  }

  if (curOdd) curOdd.next = rootEven;
  if (curEven) curEven.next = null;

  return head;
};
