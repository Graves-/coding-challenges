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

console.log(reverseParentheses('((hello)world)'));
console.log(reverseParentheses('a(bc)de'));