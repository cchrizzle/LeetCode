// 12/18/23 Monday LeetCode 9 - Palindrome Number

// https://leetcode.com/problems/palindrome-number/

/*
Given an integer x, return true if x is a
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?
*/

// 2nd attempt - working
var isPalindrome = function(x) {
    let reversedX = x.toString()
        .split('')
        .reverse()
        .join('');
    let reversedNumber = parseInt(reversedX);       // Didn't convert back to number

    return reversedNumber === x;
};




// 1st attempt
var isPalindrome = function(x) {
    let reversedNumber = x.toString()
        .split('')
        .reverse()
        .join('');

    return reversedNumber === x;
};









// Attempting to do without converting to string
var isPalindrome = function(x) {
    let reversedNumber = 0;

    while(x > 0) {
        reversedNumber *= 10;
        reversedNumber += x % 10;
        x -= x % 10;
        x /= 10;
    }

    return reversedNumber;
};

// Not working for 10; 




/* =============
Other Solutions
============= */
// https://leetcode.com/problems/palindrome-number/solutions/2499161/99-22-javascript-dart-without-converting-the-integer-to-a-string/
// How to reverse the number

original number: 543
reverse number: 0

// Get the last digit of the original number
original % 10 = 543 % 10 = 3
//Put this digit as the last one in the reverse number
reverse * 10 + digit = 0 * 10 + 3 = 0 + 3 = 3
reverse: 3
// Remove this digit from the original number
original / 10 = 543 / 10 = 54.3
~~54.3 = 54
original: 54

// Repeat
original % 10 = 54 % 10 = 4
reverse * 10 + digit = 3 * 10 + 4 = 30 + 4 = 34
reverse: 34
original / 10 = 54 / 10 = 5.4
~~5.4 = 5
original: 5

// Repeat
original % 10 = 5 % 10 = 5
reverse * 10 + digit = 34 * 10 + 5 = 340 + 5 = 345
reverse: 345
original / 10 = 5 / 10 = 0.5
~~0.5 = 0
original: 0

input: 543
output: 345

// So if the reverse number is equal to the original number, then it is a palindrome

345 != 543 //not palindrome
272 == 272 //is palindrome