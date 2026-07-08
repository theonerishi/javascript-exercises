const pascal = function(n) {
    let arr = [];
    
    for (let row = 1; row <= n; row++) {
        let currentRow = [];
        for (let i = 0; i < row; i++) {
            if (i === 0 || i === row - 1) {
                currentRow.push(1);
            } else {
                currentRow.push(arr[row - 2][i - 1] + arr[row - 2][i]);
            }
        }
        arr.push(currentRow);
    }
    
    return arr[n - 1];
};
// Do not edit below this line
module.exports = pascal;
