/**
 Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length)
        return false;
    const map1 = {};
    const map2 = {};
    for (let i = 0; i < s.length; i++) {
        if (map1[s[i]]) {
            if (t[i] !== map1[s[i]])
                return false;
        }
        else
            map1[s[i]] = t[i];
        if (map2[t[i]]) {
            if (s[i] !== map2[t[i]])
                return false;
        }
        else
            map2[t[i]] = s[i];
    }
    return true;
};

console.log(isIsomorphic("badc", "baba"))

// Input: s = "paper", t = "title"
// Input: s = "egg", t = "add"