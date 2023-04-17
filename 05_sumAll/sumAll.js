const sumAll = function(num1, num2) {
    let startNum;
    let endNum;
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    } else {
        if (num1 <= num2) {
            startNum = num1;
            endNum = num2;
        } else {
            startNum = num2;
            endNum = num1
        };
        let sum = 0;
        for (let i = startNum; i <= endNum; i++) {
            sum = sum + i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
