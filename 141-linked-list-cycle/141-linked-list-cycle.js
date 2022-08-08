/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let node = head;
    while (head && node) {
        if (node.next) {
            node = node.next.next;
        } else {
            return false;
        }
        if (node === head) return true;
        head = head.next;
    }
    return false;
};