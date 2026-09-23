const calculator = require("./calculator");

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Usage: node src/index.js <operation> <num1> <num2>");
  console.log("Operations: add, sub, mul, div");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = calculator.add(num1, num2);
    break;

  case "sub":
    result = calculator.subtract(num1, num2);
    break;

  case "mul":
    result = calculator.multiply(num1, num2);
    break;

  case "div":
    result = calculator.divide(num1, num2);
    break;

  default:
    console.log("Invalid operation");
    console.log("Operations: add, sub, mul, div");
    process.exit(1);
}

console.log(`Result: ${result}`);