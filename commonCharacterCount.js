/*
    Common Characters Count

    Given two strings, find the number of common characters between them.

    Example:

        For s1 = "aabcc" and s2 = "adcaa", the output should be
        commonCharacterCount(s1, s2) = 3.

        Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
    s1= s1.split('');
    s2 = s2.split('');

    let mapFirst = new Map();
    let mapSecond = new Map();

    for(let i = 0; i < s1.length; i++){
        if(mapFirst.has(s1[i])){
            mapFirst.set(s1[i], mapFirst.get(s1[i]) + 1);
        }else{
            mapFirst.set(s1[i], 1);
        }
    }

    for(let i = 0; i < s2.length; i++){
        if(mapSecond.has(s2[i])){
            mapSecond.set(s2[i], mapSecond.get(s2[i]) + 1);
        }else{
            mapSecond.set(s2[i], 1);
        }
    }
    let total = 0;
    for(var [k,v] of mapFirst){
        if(mapSecond.has(k)){
            if(mapSecond.get(k) < mapFirst.get(k)){
                total += mapSecond.get(k);
            }else{
                total += mapFirst.get(k);
            }
        }
    }
    return total;
}

console.log(commonCharacterCount("aabcc","adcaa"));