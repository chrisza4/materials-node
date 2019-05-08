const { joinApiCall } = require('./sample-di')

test('joinApiCall should join two api call', async () => {
  const result = await joinApiCall({
    makeAnApiCall1: async () => 'api string 1',
    makeAnApiCall2: async () => 'api string 2',
  })
  expect(result).toEqual('api string 1,api string 2')
})
