function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Scientific functions
function power(a, b) {
  return Math.pow(a, b);
}

function sqrt(a) {
  return Math.sqrt(a);
}

function sin(a) {
  return Math.sin(a);
}

function cos(a) {
  return Math.cos(a);
}

function tan(a) {
  return Math.tan(a);
}

function log(a) {
  return Math.log10(a);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  sqrt,
  sin,
  cos,
  tan,
  log
};