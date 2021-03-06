/*
    Wizeline - countAPI

    You are given a list of API calls in the format '/project/subproject/method'. 
    You need to calculate and print the number of calls to each node of the API 
    endpoint as a tree.
    
    In this tree, projects, subprojects and methods should be sorted un the same 
    order they where given in the input data. The output tree should consist of
    several strins. All subprojects start with ---- and methods start with ------.
    After the project, subproject or method name, put the numer of requests to this 
    module in parentheses, Take a look at the example for a guide of what this tree
    should look like.

    output example:

        countAPI(calls) = [
            "--project1 (6)",
            "----subproject1 (3)",
            "------method1 (2)",
            "------method2 (1)",
            "----subproject2 (3)",
            "------method1 (3)",
            "--project2 (2)",
            "----subproject1 (2)",
            "------method1 (2)",
        ]
*/

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
        result.push(`--${keyP} (${valP})`);
        for(let [keyS,valS] of subprojectMap){
            let splitSub = keyS.split('/');
            if(splitSub[0] === keyP){
                result.push(`----${splitSub[1]} (${valS})`);
                for(let [keyM,valM] of methodMap){
                    let splitMethod = keyM.split('/');
                    if(splitSub[0] === splitMethod[0] && splitSub[1] === splitMethod[1]){
                        result.push(`------${splitMethod[2]} (${valM})`);
                    }
                } 
            }
        }
    }
    return result;
}