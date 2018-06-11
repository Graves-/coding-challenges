/**
    Longest Substring with At Most K Distinct Characters

    Given a string, find the longest substring that contains only two unique characters. 
    For example, given "abcbbbbcccbdddadacb", the longest substring that contains 2 unique character 
    is "bcbbbbcccb".
*/

/**
 * @param {string} str
 * @return {string}
 */

function longestSubstring(str){
    let map = new Map();
    let max = 0;
    let start = 0;

    for(let i=0; i < str.length; i++){
        let char = str.charAt(i);
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        }else{
            map.set(char, 1);
        }

        /*
        if(map.size > 2){
            max = Math.max(max, i - start);
            while(map.size > 2){
                let t = str.charAt(start);
                let count = map.get(t);
                if(count > 1){
                    map.set(t, count - 1);
                }else{
                    map.delete(t);
                }
            }
        }
        */
    }
    //max = Math.max(max, str.length - start);
    //return max;
    return map;
}

console.log(longestSubstring("abcbbbbcccbdddadacb"));