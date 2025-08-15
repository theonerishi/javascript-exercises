const removeFromArray = function(arr, ...elements) {
    return arr.filter(item => !elements.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
