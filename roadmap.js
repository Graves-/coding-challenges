/*
    Road Map

    You have a roadmap, which is the list of tasks that your team needs to complete. Each task in this list 
    has a title, a start date, an end date, and a list of the people who will be working on it. You are given
    some queries, each of which contains a specific person's name and a date. For each query that is made, 
    you need to return the list of tasks on which that person will be working on the date specified in the 
    query, sorted by the tasks' end dates. If their end dates are equal, then sort by the tasks' titles.

    Example

    For

    tasks =
    [["A", "2017-02-01", "2017-03-01", "Sam", "Evan", "Troy"],
    ["B", "2017-01-16", "2017-02-15", "Troy"],
    ["C", "2017-02-13", "2017-03-13", "Sam", "Evan"]]
    and

    queries =
    [["Evan", "2017-03-10"],
    ["Troy", "2017-02-04"]]
    the output should be
    roadmap(tasks, queries) = [["C"], ["B", "A"]].
    On "2017-03-10" Evan only has task "C".
    Troy will be working on two tasks on "2017-02-04", "A" and "B". We sort these tasks by their end dates. "A" 
    has an end date of "2017-03-01" and "B" has an end date "2017-02-15". Since the end date for "B" is sooner than 
    the end date for "A", we should return them as ["B", "A"].
*/
const tasks = [["A", "2017-02-01", "2017-03-01", "Sam", "Evan", "Troy"],
["B", "2017-01-16", "2017-02-15", "Troy"],
["C", "2017-02-13", "2017-03-13", "Sam", "Evan"]];

const queries = [["Evan", "2017-03-10"],
["Troy", "2017-02-04"]];

function roadmap(tasks, queries) {
    let temp = [];
    let indices= [];
    let result = [];
    let mapTemp = new Map();
    let repeatCounter = 0;
    for(let qry of queries){
        let endDateRes = [];
        for(let i = 0; i < tasks.length; i++){
            let dateStart = new Date(tasks[i][1]);
            let dateEnd = new Date(tasks[i][2]);

            let fechaQry = new Date(qry[1]);
            if(fechaQry >= dateStart && fechaQry <= dateEnd){
                let newArr = tasks[i].slice(3);
                if(newArr.includes(qry[0])){
                    if(mapTemp.has(tasks[i][2])){
                        repeatCounter++;
                        mapTemp.set( tasks[i][2] + `_${repeatCounter}`, tasks[i][0]);
                        endDateRes.push(tasks[i][2] + `_${repeatCounter}`);
                    }else{
                        mapTemp.set( tasks[i][2], tasks[i][0]);
                        endDateRes.push(tasks[i][2]);
                    }
                }
            }
        }
        temp.push(endDateRes);
    }
    for(let i=0; i < temp.length; i++){
        if(temp[i].length > 1){
            temp[i].sort((a,b) => {
                let tempA = a;
                let tempB = b;
                if(a.includes('_')){
                    a = a.split('_')[0];
                }
                if(b.includes('_')){
                    b = b.split('_')[0];
                }

                if(a === b){
                    return mapTemp.get(tempA) > mapTemp.get(tempB);
                }
                return new Date(a)-new Date(b);
            });
        }
    }
    for(let i=0; i < temp.length; i++){
        let tempRes = [];
        for(let j=0; j < temp[i].length; j++){
            tempRes.push( mapTemp.get(temp[i][j]) );
        }
        result.push(tempRes);
    }
    return result;
}


console.log(roadmap(tasks, queries));
console.log(roadmap([["GOUGZ","2017-05-20","2017-08-10","Kai"]], [["Kai","2017-06-10"]]));
console.log(roadmap([["RXGWB","2017-10-10","2017-12-09","Kyle"], 
["QOEHU","2017-08-25","2017-12-11","Corey","Kai","Kaleb","Reuben"], 
["HRCPX","2017-04-04","2017-07-21","Corey","Jenson","Kyle"], 
["SQFYX","2017-07-07","2017-12-02","Reuben","Kaleb","Kai","Kyle"], 
["BIDVM","2017-04-20","2017-12-08","Kaleb"]], [["Reuben","2017-06-09"], 
["Jenson","2017-04-13"], 
["Corey","2017-12-01"], 
["Jenson","2017-05-23"], 
["Corey","2017-08-19"]]));
console.log(roadmap([["LNWBN","2017-08-13","2017-12-24","Corey","Kyle","Kaleb","Reuben"], 
["NSXEN","2017-08-20","2017-09-18","Kai"], 
["DNMDC","2017-06-19","2017-08-07","Kaleb","Kai","Kyle","Reuben"], 
["UYWEQ","2017-04-23","2017-07-18","Corey","Kyle","Reuben","Kai"], 
["LIVNH","2017-11-01","2017-12-24","Kaleb","Kai"]], [["Corey","2017-10-21"], 
["Reuben","2017-03-16"], 
["Kaleb","2017-11-22"], 
["Kaleb","2017-03-22"], 
["Reuben","2017-10-06"]]));

/*
output: [ [ 'LNWBN' ], [], [ 'LNWBN', 'LNWBN' ], [], [ 'LNWBN' ] ]
Expected Output:
[["LNWBN"], 
 [], 
 ["LIVNH","LNWBN"], 
 [], 
 ["LNWBN"]]
*/
