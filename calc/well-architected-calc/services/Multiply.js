const Operator = require("./Operator");

class MultiplyOperator extends Operator {
  operate() {
    return this.first * this.second;
  }
}

module.exports = MultiplyOperator;
