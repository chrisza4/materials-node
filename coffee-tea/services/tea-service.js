const teaList = [ 'chai', 'american breakfast', 'earl grey', 'lipton' ]

function isTea (name) {
  return teaList.includes(name)
}

module.exports = {
  isTea
}
