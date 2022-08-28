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
    let vals = [];
    let node = head;
    while (node) {
        vals.push(node.val);
        node = node.next;
    }
    node = head;
    let idx = vals.length - 1;
    while (node) {
        node.val = vals[idx];
        idx -= 1;
        node = node.next;
    }
    return head;
};