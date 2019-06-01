const PlusOperator = require("./Plus");
const MinusOperator = require("./Minus");
const MultiplyOperator = require("./Multiply");
const DivideOperator = require("./Divide");

function getOperator(first, second, operation) {
  switch (operation) {
    case "+":
      return new PlusOperator(first, second, operation);
    case "-":
      return new MinusOperator(first, second, operation);
    case "*":
      return new MultiplyOperator(first, second, operation);
    case "/":
      return new DivideOperator(first, second, operation);
  }
}

module.exports = getOperator;
