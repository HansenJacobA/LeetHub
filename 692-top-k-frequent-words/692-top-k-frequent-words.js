/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const data = {};
    for (let i = 0; i < words.length; i += 1) {
        if (data[words[i]] === undefined) {
            data[words[i]] = 1;
            continue;
        }
        data[words[i]] += 1;
    }
    const byNums = {};
    for (const val in data) {
        if (byNums[data[val]] === undefined) {
            byNums[data[val]] = [val];
            continue;
        }
        byNums[data[val]].push(val);
        byNums[data[val]].sort();
    }
    const inOrder = Object.entries(byNums).sort((a, b) => b[0] - a[0]);
    let ans = [];
    for (let i = 0; i < inOrder.length; i += 1) {
        const arr = inOrder[i][1];
        ans = [...ans, ...arr];
    }
    return ans.slice(0, k);
};