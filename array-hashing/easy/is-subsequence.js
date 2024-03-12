/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = j = 0;
    while (i < s.length){
        if (j >= t.length)
            return false;
        if (s[i] == t[j])
            i++;
        j++;
    }
    return true;
};

console.log(isSubsequence("abc", "ahbgdc"));