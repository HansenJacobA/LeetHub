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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (subRoot == null) return true;
    if (root == null) return false;
    if (helper(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function helper (p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return helper(p.left, q.left) && helper(p.right, q.right);
}