const reverseString = function(string) {
    stringAsArrayBackwards = []
    for (let i = string.length; i > 0; i--) {
        let character = string.charAt(i - 1);
        stringAsArrayBackwards.push(character);
    };
    let backwardsString = stringAsArrayBackwards.toString();
    return backwardsString.replace(/,/g,"")
};
/*
make string into array
loop through each letter of string and push to array
using length of string
*/

// Do not edit below this line
module.exports = reverseString;
