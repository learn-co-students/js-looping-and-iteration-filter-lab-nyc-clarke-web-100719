// Code your solution in this file
function findMatching(drivers, string) {
let newArr = [];
    for (const ele in drivers) {
       if (drivers[ele].toLowerCase() === string.toLowerCase()) {
            newArr.push(drivers[ele])
       }
    }
    return newArr;
}

function fuzzyMatch(drivers, string) {
    let matchArr = [];
    for (const ele in drivers) {
        let driverName = drivers[ele];
        let firstLetter = driverName[0];
            if (firstLetter === string[0]) {
                matchArr.push(driverName);
            }
    }
    return matchArr;
}
//drivers = ["caryn" = {name: "caryn", age: 12}, "bob" = {name: "bob", age: 10}]
function matchName(drivers, string) {
let matchArr = [];
    for (const personObj of drivers) {
        for (const key in personObj) {
            if (personObj[key] === string) {
                matchArr.push(personObj)
            }
        }
    }
    return matchArr;
}

