const { checkSchema, validationResult } = require('express-validator/check')

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
    const result = isCoffee(coffee)
    return res.json({
      ok: true,
      result
    })
  })
}

const coffeeList = ['americano', 'macchiato', 'mocca', 'latte', 'espresso']

function isCoffee (name) {
  return coffeeList.includes(name)
}

module.exports = {
  setup
}
