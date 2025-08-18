const fibonacci = function(n) {
 let arr = [0, 1];
 n = Number(n);
 if (n < 0) {
    return 'OOPS';
 }
 if (n >= 2) {
    for (let i = 0; i < n - 1; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
 }
 console.log(arr);
 console.log(arr[n]);
 return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
