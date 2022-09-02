/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;
    const queue = [[root, 1]];
    while (queue.length) {
        const [node, d] = queue.shift();
        if (node !== null) {
            queue.push([node.left, d + 1], [node.right, d + 1]);
            depth = Math.max(depth, d);
        }
    }
    return depth;
};