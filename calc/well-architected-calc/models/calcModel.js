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
        if (second == 0) { return 1 }
        let result = first;
        for(var i = 2;i <= second;i++) {
          result *= first
        }
        return result
        break
      default:
        throw new Error('Invalid operator')
    }
  }
}

module.exports = CalculatorModel
