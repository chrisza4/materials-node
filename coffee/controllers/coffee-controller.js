const { checkSchema, validationResult } = require('express-validator/check')
const CoffeeService = require('../services/coffee-service')

function setup (app) {
  app.post('/coffee', checkSchema({
    coffee: {
      isString: true
    }
  }), (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { coffee } = req.body
    const result = CoffeeService.isCoffee(coffee)
    return res.json({
      ok: true,
      result
    })
  })
}

module.exports = {
  setup
}
