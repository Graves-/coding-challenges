var isAnagram = function(s, t) {
    let orderedS = s.split('').sort();
    let orderedT = t.split('').sort();

    if(s.length !== t.length) return false;

    for(let i=0; i < orderedS.length; i++){
        if(orderedS[i] !== orderedT[i]) return false;
    }
    return true;
};

var isValidParentheses = function(s) {
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

function reverseParentheses(s) {
    let chars = s.split('');
    let openPosStack = new Array(chars.length);
    let openPosTop = -1;

    for (let i = 0; i < chars.length; i++) {
        switch (chars[i]) {
          case '(':
            // Push the index of the open parenthesis onto the stack
            openPosStack[++openPosTop] = i;
            break;
          case ')':
            // Reverse substring from the matching open parenthesis to here
            if (openPosTop < 0) {
                throw "Parenthesis mismatch";
            }
            let a, b;
            for (a = openPosStack[openPosTop--], b = i; a < b; a++, b--) {
                let swap = chars[a];
                chars[a] = chars[b];
                chars[b] = swap;
            }
        }
    }
    if(openPosTop >= 0){
        throw "Parenthesis mismatch";
    }
    let o = 0;
    for(let i = 0; i < chars.length; i++){
        switch(chars[i]){
            case '(': 
            case ')': break;
            default:
                chars[o++] = chars[i];
        }
    }
    let result = chars.slice(0, o).join('');
    return result;
}

var assert = require('assert');
describe('Valid Anagram', function(){
    it('"anagram", "nagaram" should return true', function(){
        assert.equal(isAnagram("anagram", "nagaram"), true);
    });

    it('"rat", "car" should return false', function(){
        assert.equal(isAnagram("rat", "car"), false);
    });
});

describe('Valid Parenthesis', function(){
    it('"(())" should return true', function(){
        assert.equal(isValidParentheses("(())"), true);
    });

    it('"((())" should return false', function(){
        assert.equal(isValidParentheses("((())"), false);
    });
});

describe('Reverse Parenthesis', function(){
    it('"a(bc)de" should return "acbde"', function(){
        assert.equal(reverseParentheses("a(bc)de"), "acbde");
    });

    it('"a(bcdefghijkl(mno)p)q" should return "apmnolkjihgfedcbq"', function(){
        assert.equal(reverseParentheses("a(bcdefghijkl(mno)p)q"), "apmnolkjihgfedcbq");
    });

    it('"The ((quick (brown) (fox) jumps over the lazy) dog)" should return "The god quick nworb xof jumps over the lazy"', function(){
        assert.equal(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)"), "The god quick nworb xof jumps over the lazy");
    });
});