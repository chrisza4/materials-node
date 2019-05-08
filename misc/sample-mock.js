const { makeAnApiCall1, makeAnApiCall2 } = require('./sample-mock-service')

async function joinApiCall () {
  const apiResults = await Promise.all([
    makeAnApiCall1(), makeAnApiCall2()
  ])

  return apiResults.join(',')
}

module.exports = {
  joinApiCall
}
