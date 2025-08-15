const repeatString = function(str, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let str2 = '';
    for (let i = 0; i < n; i++) {
        str2 += str;
    }
    return str2;
};

// Do not edit below this line
module.exports = repeatString;
