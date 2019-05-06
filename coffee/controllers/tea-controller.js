const { checkSchema, validationResult } = require('express-validator/check')
const TeaService = require('../services/tea-service')

function setup (app) {
  app.post('/tea', checkSchema({
    tea: {
      isString: true
    }
  }), (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { tea } = req.body
    const result = TeaService.isTea(tea)
    return res.json({
      ok: true,
      result
    })
  })
}

module.exports = {
  setup
}
