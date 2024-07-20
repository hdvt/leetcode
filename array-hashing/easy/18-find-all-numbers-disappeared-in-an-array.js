/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]);
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            res.push(i + 1)
    }
    return res;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));