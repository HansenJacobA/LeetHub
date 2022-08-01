/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let foundFlag = false;
    
    for(let column = 0; column < board.length; column++) {
        for(let row = 0; row < board[0].length; row++) {
            if(checkFromPosition(board, column, row, word) === true) {
                foundFlag = true;
                break;
            }
        }
        
        if(foundFlag === true) {
            break;
        }
    }
    
    return foundFlag;
};

function checkFromPosition(board, column, row, word) {
    let wordIndexMax = word.length -1;
    let foundFlag = false;
    let columnIndexMax = board.length-1;
    let rowIndexMax = board[0].length-1;
    
    let innerFunc = function(currentColumn, currentRow, wordIndex, markedMap) {
        let targetLetter = word[wordIndex];
        
        if(foundFlag === true) return;
        
        if(board[currentColumn][currentRow] !== targetLetter) {
            return;
        }
        
        markedMap[`${currentColumn}:${currentRow}`] = true;
        
        if(board[currentColumn][currentRow] === targetLetter && wordIndex === wordIndexMax) {
            foundFlag = true;
            return;
        }
        
        //check up
        if(markedMap[`${currentColumn-1}:${currentRow}`] === undefined && currentColumn !== 0) {
            innerFunc(currentColumn-1, currentRow, wordIndex+1, {...markedMap});
        }
        
        //check down
        if(markedMap[`${currentColumn+1}:${currentRow}`] === undefined && currentColumn !== columnIndexMax) {
            innerFunc(currentColumn+1, currentRow, wordIndex+1, {...markedMap});
        }
        
        //check right
        if(markedMap[`${currentColumn}:${currentRow+1}`] === undefined && currentRow !== rowIndexMax) {
            innerFunc(currentColumn, currentRow+1, wordIndex+1, {...markedMap});
        }
        
        //check left
        if(markedMap[`${currentColumn}:${currentRow-1}`] === undefined && currentRow !== 0) {
            innerFunc(currentColumn, currentRow-1, wordIndex+1, {...markedMap});
        }
    }
    
    innerFunc(column, row, 0, {});
    
    
    return foundFlag;
};