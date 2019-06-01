class Operator {
  constructor(first, second, operator) {
    this.first = first;
    this.second = second;
    this.operator = operator;
  }

  operate() {
    throw Error("Base class not implemented");
  }
}

module.exports = Operator;
