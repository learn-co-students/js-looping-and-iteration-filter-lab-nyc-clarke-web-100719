function findMatching (arr, string) {
    let match = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === string.toLowerCase()) {
            match.push(arr[i]);
        }
    }
    return match;
}

function fuzzyMatch (arr, string) {
    let match = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === string[0]) {
            match.push(arr[i]);
        }
    }
    return match;
}

function matchName (arr, string) {
    let match = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === string) {
            match.push(arr[i]);
        }
    }
    return match;
}