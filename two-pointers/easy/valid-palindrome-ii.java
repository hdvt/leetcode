/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
 */
class ValidPalindrome2 {
    public static void main(String[] args) {
        String input = "abc";
        System.out.println(input + " is " + (validPalindrome(input) ? "true" : "false"));
    }

    public static boolean validPalindrome(String s) {
        int l = 0;
        int r = s.length()-1;
        while (l < r) {
            if (s.charAt(l) == s.charAt(r)) {
                l++;
                r--;
            }
            else 
                return isPalindrome(s,l+1,r) || isPalindrome(s, l, r-1);
        }
        return true;
    }

    public static boolean isPalindrome(String s, int l, int r) {
        while (l < r) {
            if (s.charAt(l) != s.charAt(r))
                return false;
            l++;
            r--;
        }
        return true;
    }
}