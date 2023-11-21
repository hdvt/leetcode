/*
 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */

import java.util.Arrays;

class Solution {
    public static void main(String[] args) {
        int nums[] = { 1, 0, 1 };
        moveZeroes(nums);
        System.out.println("moveZeroes: " + Arrays.toString(nums));
    }

    public static void moveZeroes(int[] nums) {
        int l1 = 0; // zero index
        int l2 = 0; // non-zero index
        while (l1 < nums.length && l2 < nums.length) {
            if (nums[l1] != 0)
                l1++;
            else if (nums[l2] == 0)
                l2++;
            else {
                if (l2 > l1) {
                    nums[l1] = nums[l2];
                    nums[l2] = 0;
                    l1++;
                    l2++;
                }
                else 
                    l2++;
            }
        }
    }
}