/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let cur = head;

  while (cur && cur.next) {
    cur.next.prev = cur;
    cur = cur.next;
  }

  let tail = cur;

  while (head !== tail) {
    if (head.val !== tail.val) return false;

    head = head.next;
    if (head === tail) return true;
    tail = tail.prev;
  }

  return true;
};

/* Time Limit Exceeded */
const isPalindrome2 = (head) => {
  let cur = head;
  // let array = [];

  while (cur && cur.next) {
    // array.push(cur.val);
    cur.next.prev = cur;
    cur = cur.next;
  }
  let tail = cur;
  while (head !== tail) {
    if (head.val !== tail.val) {
      return false;
    }
    head = head.next;
    if (head === tail) return true;
    tail = tail.next;
  }

  return true;
  // while (array.length) {
  //   if (array[0] !== array[array.length - 1]) {
  //     return false;
  //   }
  //   array = array.slice(1, length - 1);
  // }
  // return true;
};
