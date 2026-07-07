const contains = function(obj, x) {
  if (Object.is(obj, x)) { // if object found return true
    return true; 
  }

  if (typeof obj !== 'object' || obj === null) {
    return false;
  } // if obj not an object return false

  for (const key in obj) { // go through each key value pair and check if value found
    if (contains(obj[key], x)) {
      return true; 
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
