/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let currSize = nums.length;
    for (let i = 0; i < currSize; i++) 
        nums.push(nums[i]);
    return nums;
};