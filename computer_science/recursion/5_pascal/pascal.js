const pascal = function(n) {
    let arr = [];
    let arr2 = [];
    for (let row = 0; row < n; row++) {
        let arr2 = [];
        for (let i = 0; i < row; i++) {
            if (i == 0 || i == row) {
                arr2.push(1);
            } else {
                arr2.push(arr[row - 1][i-1] + arr[row - 1][i]);
            }
        }
    }
};
  
// Do not edit below this line
module.exports = pascal;
