const StringHelper = require('../helpers/stringHelper')

const teaList = [ 'chai', 'american breakfast', 'earl grey', 'lipton' ]

function isTea (name) {
  return !!teaList.find(c => StringHelper.isEqualIgnoreCase(name, c))
}

module.exports = {
  isTea
}
