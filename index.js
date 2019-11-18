// Code your solution in this file
function findMatching(drivers, driverName){
    return drivers.filter(function (name) {return name.toLowerCase() === driverName.toLowerCase();});
}

function fuzzyMatch(drivers, driverName){
    let num = driverName.length
    return drivers.filter(function (name) {return name.toLowerCase().substring(0,num)===driverName.toLowerCase();});

}

function matchName(driverObject, driverName){
    return driverObject.filter(function (object) {return object.name.toLowerCase() === driverName.toLowerCase();});

}