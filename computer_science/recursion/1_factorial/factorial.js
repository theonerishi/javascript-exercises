const factorial = function(n) {
    if (typeof(n) != 'number' || n < 0 || n.toFixed(0) != n) {
        return undefined;
    } // returns undefined on invalid input
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1; // base cases
    } else {
        return n * factorial(n - 1); // recursive case creates a call on the call stack until value received
    }
};

// Do not edit below this line
module.exports = factorial;