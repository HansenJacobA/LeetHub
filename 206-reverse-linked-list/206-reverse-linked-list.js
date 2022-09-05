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
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = head ? head.next : null;
    while (curr) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr ? curr.next : null;
    }
    return prev;
};