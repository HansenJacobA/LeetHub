/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const cache = {};
    for (const num of nums) {
        cache[num] = num;
    }
    let longestStreak = 0;
    for (const key in cache) {
        let currentNum = cache[key];
        if (cache[currentNum - 1] === undefined) {
            let currentStreak = 1;
            while (cache[currentNum + 1] !== undefined) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};