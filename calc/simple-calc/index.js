const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/calc", (req, res) => {
  const data = {
    first: parseFloat(req.body.first),
    second: parseFloat(req.body.second),
    operator: req.body.operator
  };
  const { first, second } = data;
  let result;
  switch (data.operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    case "/":
      result = first / second;
      break;
    default:
      res.status(400).json({ ok: false });
  }
  res.send({ ok: true, result });
});

app.post("/greeting", (req, res) => {
  const data = request.body.persons;
  const personArray = request.body.persons.split(",");
  // ******* Impelement here
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
