const totalIntegers = function(obj) {
  if (Array.isArray(obj)) {
    let count = 0;
    for (let item of obj) {
      count += totalIntegers(item); // returns 1 if integer 0 if not
    }
    return count;
  }

  if (obj && typeof obj === 'object') {
    let count = 0;
    for (let key in obj) {
      count += totalIntegers(obj[key]); // search within the object for integers
    }
    return count;
  }

  if (Number.isInteger(obj)) {
    return 1; // if value is integer increment
  }

  return 0; // if value is not integer do not increment count variable
};

// Do not edit below this line
module.exports = totalIntegers;
