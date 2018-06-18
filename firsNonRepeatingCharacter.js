function firstNotRepeatingCharacter(s) {
    let map = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(map.has(s.charAt(i))){
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
        }else{
            map.set(s.charAt(i), 1);
        }
    }
    
    for(let [k, v] of map){
        if(v === 1) return k;
    }
    console.log(map);
    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));