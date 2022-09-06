/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let left = head;
    let right = head;
    while (right) {
        left = left.next;
        right = right.next ? right.next.next : null;
    }
    let prev = null;
    let curr = left;
    let next = left ? left.next : null;
    while (curr) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr ? curr.next : null;
    }
    let node = head;
    while (prev && node) {
        let temp = node.next;
        node.next = prev;
        node = prev;
        prev = prev.next;
        if (!prev) {
            node.next = temp;
            node = temp;
            node.next = null;
            break;
        }
        node.next = temp;
        node = temp;
    }
    return head;
};