const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let prior = 0;
    let current = 1;
    let next;
    for (i=1; i <= num; i++) {
        next = prior + current;
        prior = current;
        current = next;
    }
    return prior;
};

// Do not edit below this line
module.exports = fibonacci;
