/*
    Ticket numbers usually consist of an even number of digits. 
    A ticket number is considered lucky if the sum of the first 
    half of the digits is equal to the sum of the second half.

    Given a ticket number n, determine if it's lucky or not.

    Example:

        For n = 1230, the output should be
        isLucky(n) = true;

        For n = 239017, the output should be
        isLucky(n) = false.
*/

function isLucky(n) {
    let first = 0;
    let second = 0;
    let half = n.toString().length / 2;
    let str = n.toString();

    for(let i = 0; i < str.length; i++){
        if(i<half){
            first += parseInt(str.charAt(i));
        }else{
            second += parseInt(str.charAt(i));
        }
    }
    return first === second;
}

console.log(isLucky(1230));