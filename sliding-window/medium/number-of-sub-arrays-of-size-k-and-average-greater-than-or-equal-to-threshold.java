/*
 Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

 

Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
Example 2:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
 

Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 104
1 <= k <= arr.length
0 <= threshold <= 104
 */
class NumOfSubarrays {
    public static void main(String[] args) {
        int nums[] = {11,13,17,23,29,31,7,5,2,3};
        System.out.println("numOfSubarrays: " + numOfSubarrays(nums, 3, 5));
    }
    public static int numOfSubarrays(int[] arr, int k, int threshold) {
        int count = 0, sum = 0;
        for (int i = 0; i < arr.length; i++){
            if (i >= k)  sum -= arr[i-k];
            sum += arr[i];
            if (i + 1 >= k && sum / k >= threshold) count++;
        }        
        return count;
    }
}