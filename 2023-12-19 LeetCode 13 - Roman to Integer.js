// 2023-12-19 Tuesday LeetCode 13 - Roman to Integer

// https://leetcode.com/problems/roman-to-integer/description/

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 

Constraints:

    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/




// 2nd attempt
var romanToInt = function(s) {
    let integer = 0;

    let romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for(let i = 0; i < s.length; i++) {
        // Compare current and next numeral to determine whether I just add the value or I subtract current value from next value
        if(i < s.length - 1 && romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
            // Current numeral smaller than next; subtract from next
           integer += romanNumerals[s[i + 1]] - romanNumerals[s[i]];
           // Skip next numeral since I added it
           i++;
        } else {
            integer += romanNumerals[s[i]];
        }
    }

    return integer;
};





// 1st attempt
var romanToInt = function(s) {
    let integer = 0;

    let romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] >= s[i + 1]) {
            for(let number of Object.values(romanNumerals)) {
                integer += number;
            }
        } else {
            for(let number of Object.values(romanNumerals)) {
                integer += s[i + 1] - s[i];
            }
        }
    }

    return integer;
};




/* =============
Other Solutions
============= */
// Fastest code (65ms)
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0
    s = s.split('')

    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case 'I':
                ['V','X'].includes(s[i+1]) ? res += -1 : res += 1
            break
            case 'X':
                ['L','C'].includes(s[i+1]) ? res += -10 : res += 10
            break
            case 'C':
                ['D','M'].includes(s[i+1]) ? res += -100 : res += 100
            break
            case 'V':
                res+=5
            break
            case 'L':
                res += 50
            break
            case 'D':
                res += 500
            break
            case 'M':
                res += 1000
            break
        }
    }
    return res
};




// Another 65ms
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    } 
    let result = 0;
    for(let i=0;i<s.length;i++){
        let crtSymVal = romanVal[s[i]];
        let nxtSymVal = romanVal[s[i+1]];
        if (nxtSymVal > crtSymVal){
            result += -crtSymVal;
        }else{
            result += crtSymVal;
        }
    }
        return result;
  };




// Most memory efficient (44.5mb)
var romanToInt = function(s) {
    let num = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var answer = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const current = num[s[i]];

        if (i < s.length - 1 && current < num[s[i + 1]]) {
            answer -= current;
        } else {
            answer += current;
        }
    }

    return answer;
};




// Beat 99.99%
// https://leetcode.com/problems/roman-to-integer/solutions/4127892/beats-99-99-easy-solution-with-o-n-approach-c-python-java-javascript/
/*
✅Intuition

The intuition behind this code is to iterate through the Roman numeral string from right to left, converting each symbol to its corresponding integer value. If the current symbol has a smaller value than the symbol to its right, we subtract its value from the result; otherwise, we add its value to the result. By processing the string from right to left, we can handle cases where subtraction is required (e.g., IV for 4) effectively.
✅Approach for code

    Create an unordered map (romanValues) to store the integer values corresponding to each Roman numeral symbol ('I', 'V', 'X', 'L', 'C', 'D', 'M').

    Initialize a variable result to 0 to store the accumulated integer value.

    Iterate through the input string s from right to left (starting from the last character).

    For each character at index i, get its integer value (currValue) from the romanValues map.

    Check if the current symbol has a smaller value than the symbol to its right (i.e., currValue < romanValues[s[i + 1]]) using the condition i < s.length() - 1. If true, subtract currValue from the result; otherwise, add it to the result.

    Update the result accordingly for each symbol as you iterate through the string.

    Finally, return the accumulated result as the integer equivalent of the Roman numeral.

✅Complexity
1. Time complexity:

The time complexity of this code is O(n), where 'n' is the length of the input string s. This is because we iterate through the entire string once from right to left.
2. Space complexity:

The space complexity is O(1) because the size of the romanValues map is fixed and does not depend on the input size. We use a constant amount of additional space to store the result and loop variables, so the space complexity is constant.*/

var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanValues[s[i]];

        if (i < s.length - 1 && currValue < romanValues[s[i + 1]]) {
            result -= currValue;
        } else {
            result += currValue;
        }
    }

    return result;
};