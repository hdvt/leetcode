/**
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 

Constraints:

1 <= text.length <= 104
text consists of lower case English letters only.
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const findWord = "balloon";
    const wordHash = {};
    const textHash = {};
    for (const character of findWord)
        wordHash[character] = wordHash[character] + 1 || 1;
    for (const character of text)
        textHash[character] = textHash[character] + 1 || 1;
    let maxNumber = Number.MAX_SAFE_INTEGER;
    for (const character of Object.keys(wordHash)) 
        maxNumber = Math.min(maxNumber, Math.floor((textHash[character] || 0) / wordHash[character]))
    return maxNumber;
};
console.log(maxNumberOfBalloons("leetcode"));