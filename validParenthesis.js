/*
    Valid Parentheses

    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.

    Note that an empty string is also considered valid.
*/

var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        switch(s.charAt(i)){
            case '(': stack.push(')'); break;
            case '[': stack.push(']'); break;
            case '{': stack.push('}'); break;
            case ')':
            case ']':
            case '}':
                    if(stack.pop() !== s.charAt(i)){
                        return false;
                    }
        }
    }
    return stack.length === 0 ? true : false;
};