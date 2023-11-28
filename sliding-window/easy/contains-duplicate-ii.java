/*
 Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
 */

import java.util.HashMap;
import java.util.Map;

class ContainsNearbyDuplicate {
    public static void main(String[] args) {
        int nums[] = {1,2,3,1,1,2,3};
        System.out.println("containsNearbyDuplicate: " + containsNearbyDuplicate(nums, 0));

    }

    public static boolean containsNearbyDuplicate(int[] nums, int k) {
        int l = 0, r = 1;
        Map<Integer, Boolean> map = new HashMap<>();
        map.put(nums[l], true);
        while (r < nums.length) {            
            if (r - l > k) {
                map.remove(nums[l]);
                l++;
            }
            if (map.containsKey(nums[r]))
                return true;
            map.put(nums[r++], true);
        }
        return false;
    }
}