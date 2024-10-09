// 10/9/24 Wednesday LeetCode 383 - Ransom Note

// https://leetcode.com/problems/ransom-note/submissions/1417834150/

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

var canConstruct = function(ransomNote, magazine) {
    const magLetters = {};

    for (const letter of magazine) {
        if (letter in magLetters) {
            magLetters[letter] += 1;
        } else {
            magLetters[letter] = 1;
        }
    }

    for (const letter of ransomNote) {
        if (letter in magLetters === false || magLetters[letter] === 0) {
            return false;  
        } else {
            magLetters[letter] -= 1;
        }
    }

    return true;
};




/* =============
Other Solutions
============= */