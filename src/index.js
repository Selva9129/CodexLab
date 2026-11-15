const calc = require("./calculator");

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

let result;

switch (operation) {
  case "add":
    result = calc.add(num1, num2);
    break;

  case "sub":
    result = calc.subtract(num1, num2);
    break;

  case "mul":
    result = calc.multiply(num1, num2);
    break;

  case "div":
    result = calc.divide(num1, num2);
    break;

  case "pow":
    result = calc.power(num1, num2);
    break;

  case "sqrt":
    result = calc.sqrt(num1);
    break;

  case "sin":
    result = calc.sin(num1);
    break;

  case "cos":
    result = calc.cos(num1);
    break;

  case "tan":
    result = calc.tan(num1);
    break;

  case "log":
    result = calc.log(num1);
    break;

  default:
    console.log("Supported operations:");
    console.log("add sub mul div pow sqrt sin cos tan log");
    process.exit(1);
}

console.log("Result:", result);