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
    // Input - Linked List
    // Output - Reversed LL
    
    // Push all nodes into an array,
    // Reassign each node in reversed order
    // Return the reversed LL
    
    const nodes = [];
    let node = head;
    while (node !== null) {
        nodes.unshift(node);
        node = node.next;
    }
    for (let i = 0; i < nodes.length - 1; i += 1) {
        nodes[i].next = nodes[i + 1];
        if (i === nodes.length - 2) {
            nodes[i + 1].next = null;
        }
    }
    return nodes[0] || head;
};