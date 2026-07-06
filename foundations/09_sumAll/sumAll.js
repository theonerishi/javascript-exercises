const sumAll = function(n1, n2) {
    let total = 0;
    if (n1 < 0 || n2 < 0 || typeof(n1) != 'number' || typeof(n2) != 'number' || n1 != Math.floor(n1) || n2 != Math.floor(n2)) {
        return 'ERROR';
    }
    if (n1 > n2) {
        let tmp = n1;
        n1 = n2;
        n2 = tmp;
    }
    for (let i = n1; i <= n2; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
