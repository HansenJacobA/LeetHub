/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const lengthToMatch = word.length;
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
            let wordFound = false;
            if (board[i][j] === word[0]) {
                // ---------------------------------
                
function startLooking(wordIdx, row, col) {
    if (wordIdx === lengthToMatch) {
        wordFound = true;
    }
    const temp = board[row][col];
    board[row][col] = '*';
    const nextLetter = word[wordIdx];
    wordIdx += 1;
    if (validRowCol(row + 1, col, board) && board[row + 1][col]  === nextLetter && !wordFound) {
        startLooking(wordIdx, row + 1, col);
    }
    if (validRowCol(row - 1, col, board) && board[row - 1][col]  === nextLetter && !wordFound) {
        startLooking(wordIdx, row - 1, col);
    }
    if (validRowCol(row, col + 1, board) && board[row][col + 1]  === nextLetter && !wordFound) {
        startLooking(wordIdx, row, col + 1);
    }
    if (validRowCol(row, col - 1, board) && board[row][col - 1]  === nextLetter && !wordFound) {
        startLooking(wordIdx, row, col - 1);
    }
    board[row][col] = temp;
    return;
}
                
                // ---------------------------------
                startLooking(1, i, j);
            }
            if (wordFound) return true;
        }
    }
    return false;
};

function validRowCol(row, col, board) {
    if (row < 0 || row >= board.length ||
        col < 0 || col >= board[row].length) {
        return false;
    }
    return true;
}