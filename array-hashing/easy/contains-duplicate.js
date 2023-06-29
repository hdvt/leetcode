/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const appearances = {};
    for (const num of nums) {
        if (appearances[num])
            return true;
        appearances[num] = true;
    }
    return false;
};