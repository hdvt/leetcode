/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Solution 1
var groupAnagrams = function (strs) {
    const groupAnagrams = {};
    for (const original of strs) {
        const sorted = original.split('').sort((c1, c2) => c1.localeCompare(c2)).join('');
        if (groupAnagrams[sorted])
            groupAnagrams[sorted].push(original);
        else
            groupAnagrams[sorted] = [original];
    }
    return [...Object.values(groupAnagrams)]
};  

// solution 2
var groupAnagrams2 = function (strs) {
    const groupAnagrams = {};
    for (const str of strs) {
        const hash = getHash(str);
        if (groupAnagrams[hash])
            groupAnagrams[hash].push(str);
        else
            groupAnagrams[hash] = [str];
    }
    return [...Object.values(groupAnagrams)]
};

var getHash = (str) => {
    const frequency = new Array(26).fill(0);
    for (const char of str)
        frequency[getCode(char)]++;
    const hash = frequency.map(count => `#${count}`).join('');
    return hash;
}

var getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);