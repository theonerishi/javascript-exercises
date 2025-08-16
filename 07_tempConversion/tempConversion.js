const convertToCelsius = function(n) {
  n = (n - 32) * 5 / 9;
  return Math.round(n * 10) / 10;
};

const convertToFahrenheit = function(n) {
  n = n * 9 / 5 + 32;
  return Math.round(n * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
