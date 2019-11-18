// Code your solution in this file

function findMatching(drivers, name) {
    return drivers.filter(function (ele) { return ele.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, letters) {
    let nameLength = letters.length
    return drivers.filter(function(ele) {return ele.slice(0, nameLength) === letters })
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {return driver.name === name})
}