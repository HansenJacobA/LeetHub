/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const allVals = [];
    for (let list of lists) {
        while (list) {
            allVals.push(list.val);
            list = list.next;
        }
    }
    allVals.sort((a, b) => a - b);
    const head = new ListNode();
    let runner = head;
    for (const val of allVals) {
        const node = new ListNode(val);
        runner.next = node;
        runner = node;
    }
    return head.next;
};