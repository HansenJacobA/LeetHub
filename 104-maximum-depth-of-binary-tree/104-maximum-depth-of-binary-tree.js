var maxDepth = function(root) {
    let maxCount = 0;

    const innerFunc = function(currentNode, currentCount) {

      if(currentNode === null) return;

        if(currentCount > maxCount) {
          maxCount = currentCount;
        }

        if(currentNode?.left !== null) {
          innerFunc(currentNode.left, currentCount+1);
        }

        if(currentNode?.right !== null) {
          innerFunc(currentNode.right, currentCount+1);
        }
    }

    innerFunc(root, 1);

    return maxCount
};