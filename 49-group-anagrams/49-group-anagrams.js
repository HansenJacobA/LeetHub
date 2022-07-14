/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Input - array of strings
    // Output - array of anagram groups
    
    // Create anagram collection obj
    // Iterate through words
    // Sort current word
    // Add sorted word to collection as new array
    // Or push into existing matching array
    // Return collection as array
    // O(nlogn) time and O(n) space
    
    const anagrams = {};
    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');
        anagrams[sortedWord] = anagrams[sortedWord] === undefined ?
            [word] : [...anagrams[sortedWord], word];
    }
    return Object.values(anagrams);
};