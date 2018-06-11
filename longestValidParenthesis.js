/*
    Longest Valid Parenthesis

    Given a string containing just the characters '(' and ')', 
    find the length of the longest valid (well-formed) parentheses substring.

    Example:
        For "(()", the longest valid parentheses substring is "()", which has length = 2.
        Another example is ")()())", where the longest valid parentheses substring is "()()", 
        which has length = 4.
*/

/**
 * @param {string} str
 * @return {number}
 */

function longestValidParenthesis(str){
    if(str.length < 2) return 0;

    let stack = [];
    let result = 0;
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(char === '('){
            let a =[i, 0];
            stack.push(a);
        }else{
            if(stack.length === 0 || stack[stack.length-1][1] === 1){
                let a = [i, 1];
                stack.push(a);
            }else{
                stack.pop();
                let currentLen = 0;
                if(stack.length === 0){
                    currentLen = i+1;
                }else{
                    currentLen = i - stack[stack.length-1][0];
                }
                result = Math.max(result, currentLen);
            }
        }
    }
    return result;
}

console.log(longestValidParenthesis(")"));
console.log(longestValidParenthesis(")()())"));
console.log(longestValidParenthesis("(((())))"));
