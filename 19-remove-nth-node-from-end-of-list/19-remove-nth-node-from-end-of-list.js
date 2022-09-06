/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;
    while (n > 0) {
        n -= 1;
        right = right.next;
    }
    while (right) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;
    return dummy.next;
};