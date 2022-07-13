var longestConsecutive = function(nums) {
    let longestRun = 0;
    let startOfLongestRun = Infinity;
    let endOfLongestRun = -Infinity;
    const uniqueNums = {};
    for (let i = 0; i < nums.length; i += 1) {
        uniqueNums[nums[i]] = nums[i];
    }
    for (const num in uniqueNums) {
        let currentNum = uniqueNums[num];
        if (currentNum >= startOfLongestRun 
           && currentNum <= endOfLongestRun) continue;
        let currentRun = 1;
        let right = currentNum + 1;
        while (uniqueNums[right] !== undefined) {
            currentRun += 1;
            right += 1;
        }
        if (currentRun > longestRun) {
            longestRun = currentRun;
            startOfLongestRun = currentNum;
            endOfLongestRun = right - 1;
        }
    }
    return longestRun;
};