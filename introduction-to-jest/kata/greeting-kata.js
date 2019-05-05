function greeting (person) {
  if (isUpperCase(person)) {
    return `HELLO ${person}!`
  }
  const name = person || 'my friend'
  return `Hello, ${name}`
}

function isUpperCase (word) {
  if (!word) return false
  return word.toUpperCase() === word
}

module.exports = {
  greeting
}
