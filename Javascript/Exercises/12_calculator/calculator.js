const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a-b
};

const sum = function(arr) {
	let result = 0 
  for(let number of arr){
    result += number
  }
  return result
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
	return factorial_compute(a)
};

function factorial_compute(a){
  if(a <= 1){ 
    return 1
  }
  return a * factorial_compute(a - 1)
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
