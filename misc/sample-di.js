const { makeAnApiCall1, makeAnApiCall2 } = require('./sample-mock-service')

async function joinApiCall (deps) {
  deps = {
    makeAnApiCall1,
    makeAnApiCall2,
    ...deps
  }
  const apiResults = await Promise.all([
    deps.makeAnApiCall1(), deps.makeAnApiCall2()
  ])

  return apiResults.join(',')
}

module.exports = {
  joinApiCall
}
