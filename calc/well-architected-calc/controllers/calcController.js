const OperatorFactory = require("../services/OperatorFactory");

function PostCalc(request, response) {
  const { first, second, operator } = request.body;
  const operatorObj = OperatorFactory(first, second, operator);
  response.send({ ok: true, result: operatorObj.operate() });
}

module.exports = {
  PostCalc
};
