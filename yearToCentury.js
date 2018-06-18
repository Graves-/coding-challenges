function centuryFromYear(year) {
    let arrayDigits = year.toString().split('');
    let n = arrayDigits.length;
    if(n < 3){
        return 1;
    }else{
        let lastDigit = arrayDigits.pop();
        let secondLastDigit = arrayDigits.pop();
        if(secondLastDigit === '0' && lastDigit === '0'){
            if(n === 4){
                return parseInt(arrayDigits[0] + arrayDigits[1]);
            }else{
                return parseInt(arrayDigits[0]);
            }
        }else{
            if(n === 4){
                return parseInt(arrayDigits[0] + arrayDigits[1]) + 1;
            }else{
                return parseInt(arrayDigits[0]) + 1;
            }
        }
    }
}

//console.log();

console.log(centuryFromYear(1905));
console.log(centuryFromYear(99));
console.log(centuryFromYear(1));
console.log(centuryFromYear(150));
console.log(centuryFromYear(1500));