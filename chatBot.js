/**
 * @param {string[][]} conversations
 * @param {string[]} currentConv
 * @return {string[]}
 */

function chatBot(conversations, currentConv){
    let matchInfo = [];
    let currentConvSet = new Set();

    // agregar todas las palabras en la conversación actual a un SET
    for(let word of currentConv){
        currentConvSet.add(word);
    }

    /* 
        por cada conversación, buscar si la palabra en cada arreglo 
        se encuentra en el SET de la conversacion actual para saber
        cuantas veces se presenta lel match unico.

        se va contando las veces que se presenta un match unico y se
        registra el índice donce se dió el match

        se guarda en un arreglo la cantidad de matches y el índice más largo
    */
    for(let conv of conversations){
        let matchesCount = 0;
        let largestMatchIndex = -1;
        let wordsMatches = new Set();
        for(let i = 0; i < conv.length; i++){
            if(currentConvSet.has(conv[i])){
                if(!wordsMatches.has(conv[i])){
                    wordsMatches.add(conv[i]);
                    matchesCount++;
                }
                largestMatchIndex = i;
            }
        }
        matchInfo.push([matchesCount, largestMatchIndex]);
    }

    /*
        del arreglo creado, se busca la conversación que más matches tenga
    */
    let mostMatches = -1;
    let index = -1;
    for(let i = 0; i < matchInfo.length; i++){
        if(matchInfo[i][0] > mostMatches){
            mostMatches = matchInfo[i][0];
            index = i;
        }
    }
    /*
        no se encontraron matches:

        se regresa la misma conversación actual
    */
    if(mostMatches === 0){
        return currentConv;
    }else{
        /*
            si se encontraron matches:

            se recorre el arreglo de la conversación
            donde se encontraron más matches

            se itera a partir de el índice de el último match + 1 
            (por que es apartir de la siguiente
            palabra donde se encontró el último match)

            se van agregando las palabras nuevas a la conversación actual
        */
        for(let i = (matchInfo[index][1]+1); i < conversations[index].length; i++){
            currentConv.push(conversations[index][i]);
        }
        return currentConv;
    }
}

console.log(chatBot([["it","is","my","favorite","movie"], 
["really","i","did","not","know"]], ["what", 
"you", 
"think", 
"about", 
"this", 
"movie"]));

console.log(chatBot([
    ["tonight","i","need","dollar","bills"], 
    ["i","dont","keep","fun"], 
    ["cheap","thrills","long","to","feel","money"], 
    ["the","bills","dont","need","the","dancing","baby"], 
    ["fun","dollar","dancing","thrills","the","baby","i","need"], 
    ["dont","have","fun"], 
    ["no","no","dont","have","dancing","fun","tonight"]
], 
["beat", "the", "can", "as", "i", "dont", "feel", "thrills"]));

console.log(chatBot([["where","are","you","live","i","live","in","new","york"], 
["are","you","going","somewhere","tonight","no","i","am","too","tired","today"], 
["hello","what","is","your","name","my","name","is","john"]],
["hello", "john", "do", "you", "have", "a", "favorite", "city", "to", "live", "in", "yes", "it", "is"]));

/*
input: conversations: [["where","are","you","live","i","live","in","new","york"], 
 ["are","you","going","somewhere","tonight","no","i","am","too","tired","today"], 
 ["hello","what","is","your","name","my","name","is","john"]]
currentConversation: ["hello", 
 "john", 
 "do", 
 "you", 
 "have", 
 "a", 
 "favorite", 
 "city", 
 "to", 
 "live", 
 "in", 
 "yes", 
 "it", 
 "is"
 ***********************************************************************
input: conversations: [["lets","have","some","fun"], 
 ["i","never","get","it"], 
 ["be","aware","of","this","house"], 
 ["he","will","call","her"]]
currentConversation: ["can", 
 "you", 
 "please"]
Output:
Run the code to see output
Expected Output:
["can", 
 "you", 
 "please"]
 ***********************************************************************
input conversations: [["it","is","my","favorite","movie"], 
 ["really","i","did","not","know"]]
currentConversation: ["what", 
 "you", 
 "think", 
 "about", 
 "this", 
 "movie"]
Output:
Run the code to see output
Expected Output:
["what", 
 "you", 
 "think", 
 "about", 
 "this", 
 "movie"]
 ***********************************************************************
input: conversations: [["tonight","i","need","dollar","bills"], 
 ["i","dont","keep","fun"], 
 ["cheap","thrills","long","to","feel","money"], 
 ["the","bills","dont","need","the","dancing","baby"], 
 ["fun","dollar","dancing","thrills","the","baby","i","need"], 
 ["dont","have","fun"], 
 ["no","no","dont","have","dancing","fun","tonight"]]
currentConversation: ["beat", 
 "the", 
 "can", 
 "as", 
 "i", 
 "dont", 
 "feel", 
 "thrills"]
Output:
Run the code to see output
Expected Output:
["beat", 
 "the", 
 "can", 
 "as", 
 "i", 
 "dont", 
 "feel", 
 "thrills", 
 "need"]
Console Output:
Empty
 ***********************************************************************
input: conversations: [["fame","what","you","like","is","in","the","limo"], 
 ["fame","what","you","get","is","no","tomorrow"], 
 ["fame","what","you","need","you","have","to","borrow","fame"], 
 ["fame","its","mine","its","mine","its","just","his","line"], 
 ["to","bind","your","time","it","drives","you","to","crime"]]
currentConversation: ["what", 
 "is"]
Output:
Run the code to see output
Expected Output:
["what", 
 "is", 
 "in", 
 "the", 
 "limo"]
Console Output:
Empty
*/

/*
def roadmap(tasks, queries):
    
    tasksSorted = sorted(tasks, key=lambda task: (task[2], task[0]))
    tasksForQueries = []
    
    for query in queries:
        tasksToComplete = []
        for task in tasksSorted:
            if task[1] <= query[1] <= task[2] and query[0] in task[3:]:
                tasksToComplete.append(task[0])
        tasksForQueries.append(tasksToComplete)
                
return tasksForQueries
*/