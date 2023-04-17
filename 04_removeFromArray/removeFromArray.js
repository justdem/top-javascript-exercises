const removeFromArray = function(array, ...unwantedValues) {
    let newArray = array;
    for (unwantedValue of unwantedValues) {
        function isNotUnwantedValue(arrayValue) {return arrayValue !== unwantedValue};
        newArray = newArray.filter(isNotUnwantedValue);
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
