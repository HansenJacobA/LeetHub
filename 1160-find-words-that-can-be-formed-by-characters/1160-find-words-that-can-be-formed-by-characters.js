/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let sum = 0;
    const charBank = {};
    for (let i = 0; i < chars.length; i += 1) {
        if (charBank[chars[i]] === undefined) {
            charBank[chars[i]] = 1;
            continue;
        }
        charBank[chars[i]] += 1;
    }
    for (let i = 0; i < words.length; i += 1) {
        const copy = {...charBank};
        for (let j = 0; j < words[i].length; j += 1) {
            if (copy[words[i][j]] === undefined ||
               copy[words[i][j]] === 0) break;
            copy[words[i][j]] -= 1;
            if (j === words[i].length - 1) sum += words[i].length;
        }
    }
    return sum;
};