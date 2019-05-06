const coffeeList = ['americano', 'macchiato', 'mocca', 'latte', 'espresso']

function isCoffee (name) {
  return coffeeList.includes(name)
}

module.exports = {
  isCoffee
}
