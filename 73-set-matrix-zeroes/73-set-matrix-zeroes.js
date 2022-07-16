/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // Input - 2d array
    // Output - same 2d array changed in place
    
    // 2d array to traverse left to right top to bottom
    // if zero is hit, outer function to change values
    
    let coordinates = [];
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[0].length; j += 1) {
            if (matrix[i][j] === 0) {
                coordinates.push([i, j]);
            }
        }
    }
    
    // go through coordinates and change vals
    for (let i = 0; i < coordinates.length; i += 1) {
        setOrder(matrix, coordinates[i][0], coordinates[i][1]);
    }
    return matrix;
};

function setOrder(matrix, i, j) {
    let row = i;
    let col = j;
    while (row >= 0) {
        if (matrix[row][j] !== 0) {
            matrix[row][j] = 0;
        }
        row -= 1;
    }
    row = i;
    while (row < matrix.length) {
        if (matrix[row][j] !== 0) {
            matrix[row][j] = 0;
        }
        row += 1;
    }
    while (col >= 0) {
        if (matrix[i][col] !== 0) {
            matrix[i][col] = 0;
        }
        col -= 1;
    }
    col = j;
    while (col < matrix[0].length) {
        if (matrix[i][col] !== 0) {
            matrix[i][col] = 0;
        }
        col += 1;
    }
};