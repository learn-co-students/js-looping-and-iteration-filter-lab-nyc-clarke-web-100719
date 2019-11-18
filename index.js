// Code your solution in this file
function findMatching(drivers, string){
    return drivers.filter(function(driver_name) {return driver_name === string || driver_name === string.toLowerCase()});
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver_name) {return driver_name.startsWith(string)});
}

function matchName(drivers, string){
    return drivers.filter(function(key) {return key.name === string });
}