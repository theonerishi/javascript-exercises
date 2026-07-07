const permutations = function(arr) {
    // Base case: if array has 0 or 1 element, return it wrapped in an array
    if (arr.length <= 1) {
        return [arr];
    }
    
    let result = [];
    
    // For each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Get the current element
        const current = arr[i];
        // Get remaining elements by removing the current one
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        // Recursively get all permutations of the remaining elements
        const perms = permutations(remaining);
        
        // For each permutation, prepend the current element
        for (let perm of perms) {
            result.push([current, ...perm]);
        }
    }
    
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
