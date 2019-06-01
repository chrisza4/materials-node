const Operator = require("./Operator");

class MinusOperator extends Operator {
  operate() {
    return this.first - this.second;
  }
}

module.exports = MinusOperator;
