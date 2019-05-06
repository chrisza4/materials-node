const CoffeeController = require('../controllers/coffee-controller')
const TeaController = require('../controllers/tea-controller')

function setup (app) {
  CoffeeController.setup(app)
  TeaController.setup(app)
}

module.exports = {
  setup
}
