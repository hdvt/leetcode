/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length != t.length)
        return false;
    const charAppearances = [];
    for (const c of s) {
        charAppearances[c] = charAppearances[c] ? charAppearances[c] + 1 : 1;
    }
    for (const c of t) {
        if (!charAppearances[c])
            return false;
        if (--charAppearances[c] < 0)
            return false;        
    }
    return true;
};