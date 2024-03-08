import java.util.HashMap;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashMap<Integer, Boolean> numbers = new HashMap<>();
        for (int n : nums) {
            if (numbers.containsKey(n))
                return true;
            numbers.put(n, true);
        }
        return false;
    }
}