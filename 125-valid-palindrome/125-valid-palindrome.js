/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const strippedInput = [];
    for (let i = 0; i < s.length; i += 1) {
        const currChar = s[i].toLowerCase();
        const currCharAscii = currChar.charCodeAt();
        if (
            currCharAscii > 96 && currCharAscii < 123
            ||
            currCharAscii > 47 && currCharAscii < 58
        ) {
            strippedInput.push(currChar);
        }
    }
    const formattedInput = strippedInput.join('');
    let leftIdx = 0;
    let rightIdx = formattedInput.length - 1;
    while (formattedInput[leftIdx] === formattedInput[rightIdx] && leftIdx <= rightIdx) {
        leftIdx += 1;
        rightIdx -= 1;
    }
    return leftIdx >= rightIdx;
};