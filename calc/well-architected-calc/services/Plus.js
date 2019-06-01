const Operator = require("./Operator");

class PlusOperator extends Operator {
  operate() {
    return this.first + this.second;
  }
}

module.exports = PlusOperator;
