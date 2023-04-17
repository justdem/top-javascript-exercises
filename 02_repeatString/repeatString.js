const repeatString = function(string, num) {
    let repeatStringResult = "";
    if (num < 0) {repeatStringResult = 'ERROR'};
    for (let i = 1; i <= num; i++) {
        repeatStringResult += string;
    };
    return repeatStringResult
};

// Do not edit below this line
module.exports = repeatString;
