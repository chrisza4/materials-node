const StringHelper = require('../helpers/stringHelper')

const coffeeList = ['americano', 'macchiato', 'mocca', 'latte', 'espresso']

function isCoffee (name) {
  return !!coffeeList.find(c => StringHelper.isEqualIgnoreCase(name, c))
}

module.exports = {
  isCoffee
}
