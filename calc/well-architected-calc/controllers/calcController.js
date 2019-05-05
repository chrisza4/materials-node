const CalculatorModel = require('../models/calcModel')

function PostCalc (request, response) {
  const model = new CalculatorModel(request.body.first, request.body.second, request.body.operator)
  response.send({ ok: true, result: model.calculate() })
}

module.exports = {
  PostCalc
}
