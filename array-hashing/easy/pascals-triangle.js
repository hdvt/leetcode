// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]];
    if (numRows === 1)
        return result;
    for (let i = 1; i < numRows; i++){
        for (let j = 0; j < i + 1; j++){
            if (!result[i]) result[i] = [];
            result[i][j] = (result[i-1][j-1] | 0) +  (result[i-1][j] | 0) ; 
        }
    }
    return result;
};