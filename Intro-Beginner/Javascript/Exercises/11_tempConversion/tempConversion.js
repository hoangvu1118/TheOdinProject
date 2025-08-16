const convertToCelsius = function(temperature) {
  let result = (temperature - 32) / 1.8
  let roundresult = result.toFixed(1)
  return parseFloat(roundresult)
};

const convertToFahrenheit = function(temperature) {
  let result = (temperature * 9/5) + 32
  let roundResult = result.toFixed(1)
  return parseFloat(roundResult)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
