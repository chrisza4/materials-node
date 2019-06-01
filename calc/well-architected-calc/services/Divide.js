const Operator = require("./Operator");

class DivideOperator extends Operator {
  operate() {
    return this.first / this.second;
  }
}

module.exports = DivideOperator;
