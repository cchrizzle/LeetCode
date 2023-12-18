// 12/17/23 Sunday LeetCode 1 - Two Sum

// https://leetcode.com/problems/two-sum/description/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // take two numbers that need to add up to target
    for(let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while(nums[i] + nums[j] != target) {
            j++;
        }
        return [i, j]
    }
};




/* =============
Other Solutions
============= */




/* =============
Own Notes from https://www.youtube.com/watch?v=JMCTsP0Jxmc
============= */

for (let left = 0; left < navigator; left++) {
    for (let right = left + 1; right < navigator; right++) {
        if nums[left] + nums[right] == target {
            return []int{left,right}
        }
    }
    return[]int{};
}

// (8:20) Hashmap
// use hashmap to store elements we've already checked
// (12:00) Coding out
// Steps
// 1. Create hashmap
// 2. Iterate through input array
// 3. Required value in hashmap?
// 4. If present return the result
// 5. Else add current value to hashmap
function twoSum(nums, target) {
    const numsMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        const reqNum = target - nums[i];
        if(numsMap.has(reqNum)) {
            return [i, numsMap.get(reqNum)];
        }
        numsMap.set(nums[i], i)
    }

    return [];
}



func twoSums(nums []int, target int) []int {
    numsMap := make(map[int]int)

    for i:=0; i<length(nums); i++ {
        reqNum := taret - nums[i]
        reqNumIdx, isPresent := numsMap[reqNum]

        if isPresent {
            return []int{i, reqNumIdx}
        }
        numsMap[nums[i]] = i
    }
    return []int{}
}