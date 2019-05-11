class CalculatorModel {
  constructor (first, second, operator) {
    this.first = first
    this.second = second
    this.operator = operator
  }

  calculate () {
    const { first, second, operator } = this
    switch (operator) {
      case "+":
        return first + second
        break
     case "-":
        return first - second
        break
      case "*":
        return first * second
        break
      case "/":
        return first / second
        break
      case "^":
        if (first === '0' && second === '0') {
          throw new Error('Invalid first and second')
        }
        return Math.pow(first, second);
      default:
        throw new Error('Invalid operator')
    }
  }
}

module.exports = CalculatorModel
