// 1/3/24 Wednesday LeetCode 14 - Longest Common Prefix

// https://leetcode.com/problems/longest-common-prefix/description/

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.


*/




// 3rd attempt - working 55ms runtime
var longestCommonPrefix = function(strs) {
    let commonPrefix = '';

    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return commonPrefix;
            }
        }
        commonPrefix += strs[0][i];
    }

    return commonPrefix;
}




// 2nd attempt
var longestCommonPrefix = function(strs) {
    let commonPrefix = '';

    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 0; j < strs.length; j++) {
            if(strs[0][i] === strs[j][i]) {
                while(strs[0][i])
                commonPrefix += strs[0][i];
            } else {
                return commonPrefix;
            }
        }
    }
};





// 1st attempt
var longestCommonPrefix = function(strs) {
    let commonPrefix = '';

    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 0; j < strs.length; j++) {
            while(strs[0][i] === strs[j][i]) {
                commonPrefix += strs[0][i];
            }
        }
    }

    return commonPrefix;
};




/* =============
Other Solutions
============= */
// Fastest code: 29ms runtime
var longestCommonPrefix = function (strs) {
    let prefix = '';
    const firstStr = strs[0];

    for (let i = 0; i < firstStr.length; i++) {
        const currChar = firstStr[i];

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currChar) {
                return prefix;
            }
        }

        prefix += currChar;

    }

    return prefix;
}