/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // input - 2d array
    // output - array list
    
    // traverse right, down, left, up
    // update all side values and traverse again
    // watch for duplicates
    // at each each element, push into list
    // return list
    
    const list = [];
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    
    while (left <= right && top <= bottom) {
        // go right
        for (let i = left; i <= right; i += 1) {
            list.push(matrix[top][i]);
        }
        top += 1;
        // go down
        for (let i = top; i <= bottom; i += 1) {
            list.push(matrix[i][right]);
        }
        right -= 1;
        // go left
        for (let i = right; i >= left; i -= 1) {
            if (top > bottom) break;
            list.push(matrix[bottom][i]);
        }
        bottom -= 1;
        // go up
        for (let i = bottom; i >= top; i -= 1) {
            if (left > right) break;
            list.push(matrix[i][left]);
        }
        // update last side
        left += 1;
    }
    return list;
};