const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/calc', (req, res) => {
  const data = {
    first: parseFloat(req.body.first),
    second: parseFloat(req.body.second),
    operator: req.body.operator,
  }
  const { first, second } = data
  let result
  switch (data.operator) {
    case '+':
      result = first + second
      break
    case '-':
      result = first - second
      break
    case '*':
      result = first * second
      break
    case '/':
      result = first / second
      break
    case '^':
      // return error for 0^0
      if (first === 0) {
        res.status(400).json({ ok: false })
      }

      // valid first and second
      result = 1
      for (let i = 0; i < second; i++) {
        result *= first
      }
      break
    default:
      res.status(400).json({ ok: false })
  }
  res.send({ ok: true, result })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
