/*
    Single Number

    Given a non-empty array of integers, every element appears twice except for one. Find that single one.
    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

    Example 1:
        Input: [2,2,1]
        Output: 1
    
    Example 2:
        Input: [4,1,2,1,2]
        Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numMap = new Map();

    nums.forEach((val, i) => {
        if(numMap.has(val)){
            let times = numMap.get(val);
            numMap.set(val, times+1);
        }else{
            numMap.set(val, 1);
        }
    });

    for(const [k,v] of numMap.entries()){
        if(v === 1) return k;
    }
};

console.log(singleNumber([4,1,2,1,2]));