// Code your solution in this file
function findMatching(obj,name){
 const collection = [];
    for (const item of obj){
        if(item.toLowerCase() === name.toLowerCase()) collection.push(item);
    }
    return collection;
};

function fuzzyMatch(obj,letters){
    const collection =[];
        for(const item of obj){
            if(item.slice(0,letters.length) == letters) collection.push(item);
        };
    return collection;
};

function matchName(arr,name){
    const collection = [];
    for(const obj of arr){
        if(obj["name"] === name) collection.push(obj);
    };
    return collection;
}