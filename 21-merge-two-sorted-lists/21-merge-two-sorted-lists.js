/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const vals = [];
    while (list1 && list2) {
        vals.push(list1.val);
        list1 = list1.next;
    }
    while (list2) {
        vals.push(list2.val);
        list2 = list2.next;
    }
    if (vals.length) {
        vals.sort((a,b) => a - b);
        let node = new ListNode(vals.shift());
        let result = node;
        for (val of vals) {
            node.next = new ListNode(val);
            node = node.next;
        }
        return result;
    }
    return list1;
};