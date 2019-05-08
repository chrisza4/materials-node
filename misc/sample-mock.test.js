const Services = require('./sample-mock-service')
const { joinApiCall } = require('./sample-mock')
jest.mock('./sample-mock-service.js')

test('joinApiCall should join two api call', async () => {
  Services.makeAnApiCall1.mockResolvedValue('api string 1')
  Services.makeAnApiCall2.mockResolvedValue('api string 2')
  const result = await joinApiCall()
  expect(result).toEqual('api string 1,api string 2')
})
