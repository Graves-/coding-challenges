const calls = [
    "/project1/subproject1/method1",
    "/project2/subproject1/method1",
    "/project1/subproject1/method1",
    "/project1/subproject2/method1",
    "/project1/subproject1/method2",
    "/project1/subproject2/method1",
    "/project2/subproject1/method1",
    "/project1/subproject2/method1"
];


function countAPI(calls){
    let projectMap = new Map();
    let subprojectMap = new Map();
    let methodMap = new Map();
    let projectArray = [];

    for(let i = 0; i < calls.length; i++){
        let splitArr = calls[i].split('/');
        splitArr.shift();

        if(methodMap.has(`${splitArr[0]}/${splitArr[1]}/${splitArr[2]}`)){
            methodMap.set(`${splitArr[0]}/${splitArr[1]}/${splitArr[2]}`, methodMap.get(`${splitArr[0]}/${splitArr[1]}/${splitArr[2]}`) + 1);
        }else{
            methodMap.set(`${splitArr[0]}/${splitArr[1]}/${splitArr[2]}`, 1);
        }

        if(subprojectMap.has(`${splitArr[0]}/${splitArr[1]}`)){
            subprojectMap.set(`${splitArr[0]}/${splitArr[1]}`, subprojectMap.get(`${splitArr[0]}/${splitArr[1]}`) + 1);
        }else{
            subprojectMap.set(`${splitArr[0]}/${splitArr[1]}`, 1);
        }

        if(projectMap.has(splitArr[0])){
            projectMap.set(splitArr[0] ,projectMap.get(splitArr[0]) + 1);
        }else{
            projectMap.set(splitArr[0], 1);
        }
    }
    let result = [];
    for(let [keyP,valP] of projectMap){
        //console.log(`--${keyP} (${valP})`);
        result.push(`--${keyP} (${valP})`);
        for(let [keyS,valS] of subprojectMap){
            let splitSub = keyS.split('/');
            if(splitSub[0] === keyP){
                //console.log(`----${splitSub[1]} (${valS})`);
                result.push(`----${splitSub[1]} (${valS})`);
                for(let [keyM,valM] of methodMap){
                    let splitMethod = keyM.split('/');
                    if(splitSub[0] === splitMethod[0] && splitSub[1] === splitMethod[1]){
                        //console.log(`------${splitMethod[2]} (${valM})`);
                        result.push(`------${splitMethod[2]} (${valM})`);
                    }
                } 
            }
        }
    }
    return result;
    //console.log(subprojectMap);
    //console.log(projectMap);
    //console.log(methodMap);
}

console.log(countAPI(calls));