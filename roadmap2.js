function roadmap(tasks, queries) {
    let mapDates = new Map();
    let repeatCounter = 0;
    tasks.sort((a,b) => {
        let tempA = a;
        let tempB = b;
        if(a.includes('_')){
            a = a.split('_')[0];
        }
        if(b.includes('_')){
            b = b.split('_')[0];
        }
        return new Date(a[2]) - new Date(b[2]);
    });

    let result = [];
    for(let qry of queries){
        let temp = [];
        for(let i = 0; i < tasks.length; i++){
            let dateStart = new Date(tasks[i][1]);
            let dateEnd = new Date(tasks[i][2]);
            let fechaQry = new Date(qry[1]);
            if(fechaQry >= dateStart && fechaQry <= dateEnd){
                if(tasks[i].includes(qry[0])){
                    if(mapDates.has(tasks[i][2])){
                        repeatCounter++;
                        mapDates.set( tasks[i][2] + `_${repeatCounter}`, tasks[i][0]);
                        temp.push(tasks[i][2] + `_${repeatCounter}`);
                    }else{
                        mapDates.set(tasks[i][2], tasks[i][0]);
                        temp.push(tasks[i][2]);
                    }
                }
            }
        }
        result.push(temp);
    }
    console.log(mapDates);
    console.log(result);
}


roadmap([["LNWBN","2017-08-13","2017-12-24","Corey","Kyle","Kaleb","Reuben"], 
["NSXEN","2017-08-20","2017-09-18","Kai"], 
["DNMDC","2017-06-19","2017-08-07","Kaleb","Kai","Kyle","Reuben"], 
["UYWEQ","2017-04-23","2017-07-18","Corey","Kyle","Reuben","Kai"], 
["LIVNH","2017-11-01","2017-12-24","Kaleb","Kai"]], [["Corey","2017-10-21"], 
["Reuben","2017-03-16"], 
["Kaleb","2017-11-22"], 
["Kaleb","2017-03-22"], 
["Reuben","2017-10-06"]])