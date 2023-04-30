const palindromes = function (string) {
    const lower = string.toLowerCase();
    const alphaNumOnly = lower.match(/[a-z]|[0-9]/g);
    const length = alphaNumOnly.length;
    let firstHalf;
    let secondHalf;
    if (length % 2 === 0) {
        firstHalf = alphaNumOnly.slice(0, length/2);
        secondHalf = alphaNumOnly.slice(length/2);
    } else {
        firstHalf = alphaNumOnly.slice(0, Math.floor(length/2));
        secondHalf = alphaNumOnly.slice(Math.ceil(length/2));
    };
    secondHalf.reverse();
    return secondHalf.join("") === firstHalf.join("");
};

// Do not edit below this line
module.exports = palindromes;