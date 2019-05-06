function isEqualIgnoreCase (str1, str2) {
  if (str1 === str2) {
    return true
  }
  if (isStrNullOrUndefined(str1) || isStrNullOrUndefined(str2)) {
    return false
  }
  return str1.toLowerCase() === str2.toLowerCase()
}

function isStrNullOrUndefined (str) {
  return str === null || str === undefined
}

module.exports = {
  isEqualIgnoreCase
}
