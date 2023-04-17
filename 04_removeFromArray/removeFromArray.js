const removeFromArray = function(array, unwantedValue) {
    function isNotUnwantedValue(arrayValue) {return arrayValue != unwantedValue};
    let newArray = array.filter(isNotUnwantedValue);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
