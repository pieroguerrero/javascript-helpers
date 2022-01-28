const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {

  return arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

};

const multiply = function (arr) {
  if (arr.length > 0) {
    return arr.reduce((prev, curr) => {
      return prev * curr;
    });
  } else return 0;


};

const power = function (x, e) {
  return x ** e;
};

const factorial = function (n) {
  if (n === 0) return 1;
  else if (n > 0) {
    return n * factorial(n - 1);
  } else return "ERROR";

};

//sum([]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
