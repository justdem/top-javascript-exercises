const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const sum = array.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0)
  return sum;
};

const multiply = function(array) {
  const total = array.reduce((total, num) => {
    total *= num;
    return total;
  }, 1)
  return total;
};

function power(a, b) {
  return a**b;
}

const factorial = function(a) {
  let i = 1;
  let factorial = 1;
  while (i <= a) {
    factorial *= i;
    i++;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
