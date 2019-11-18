// Code your solution in this file
function findMatching(arr, target) {
    let answer = [];
    for (const ele in arr) {
        if (arr[ele].charAt(0).toUpperCase() + arr[ele].slice(1) === target) {
            answer.push(arr[ele]);
        }
    }
    
    return answer;
}


function fuzzyMatch(arr, chara) {
    let answer = [];
    for (const ele in arr) {
        if (arr[ele].slice(0,2) === chara) {
            answer.push(arr[ele]);
        }
    }
    return answer;
}

function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }