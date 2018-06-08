/*
    Generate Parentheses

    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

    For example, given n = 3, a solution set is:
        [
            "((()))",
            "(()())",
            "(())()",
            "()(())",
            "()()()"
        ]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = [];

    for(let i = 0; i < n; i++){
        if(i === 0) { 
            stack.push('(') 
        }else{
            switch(stack[stack.length-1]){
                case '(': stack.push(')');
            }
        }
    }

    console.log(stack);
};

generateParenthesis(3);