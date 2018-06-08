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

function countAPI(calls){
    let callsMap = new Map();
    let subprojectMap = new Map();
    let methodMap = new Map();
    let orderMap = new Map();
    let projectOrder = 0, subprojectOrder = 0,methodOrder = 0;

    for(let i = 0; i < calls.length; i++){
        let splitCall = calls[i].split('/');
        let project = splitCall[1];
        let subproject = splitCall[2];
        let method = splitCall[3];

        if(callsMap.has(project)){
            callsMap.set(project, callsMap.get(project) + 1);
        }else{
            callsMap.set(project, 1);
        }

        if(subprojectMap.has(`${project}/${subproject}`)){
            subprojectMap.set(`${project}/${subproject}`, subprojectMap.get(`${project}/${subproject}`) + 1);
        }else{
            subprojectMap.set(`${project}/${subproject}`, 1);
        }

        if(methodMap.has(`${project}/${subproject}/${method}`)){
            methodMap.set(`${project}/${subproject}/${method}`, methodMap.get(`${project}/${subproject}/${method}`) + 1);
        }else{
            methodMap.set(`${project}/${subproject}/${method}`, 1);
        }
    }

    for(let [k,v] of callsMap){
        console.log(`--${k} (${v})`);
        subprojectMap.get(/k/ig);
    }
    console.log(callsMap);
    console.log(subprojectMap);
    console.log(methodMap);
}

countAPI(calls);