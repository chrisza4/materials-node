const request = require('supertest')
const app = require('./index')

describe('Calculator', () => {
  it('given 1 + 1, should return 2', async () => {
    const response = await request(app)
      .post('/calc')
      .send({ first: 1, second: 1, operator: '+' })
    expect(response.status).toEqual(200)
    expect(response.body.ok).toBeTruthy()
    expect(response.body.result).toEqual(2)
  })

  it('given 2 * 2, should return 4', async () => {
    const response = await request(app)
      .post('/calc')
      .send({ first: 2, second: 2, operator: '*' })
    expect(response.status).toEqual(200)
    expect(response.body.ok).toBeTruthy()
    expect(response.body.result).toEqual(4)
  })

  it('given 4 - 1, should return 3', async () => {
    const response = await request(app)
      .post('/calc')
      .send({ first: 4, second: 1, operator: '-' })
    expect(response.status).toEqual(200)
    expect(response.body.ok).toBeTruthy()
    expect(response.body.result).toEqual(3)
  })

  it('given 8 * 2, should return 4', async () => {
    const response = await request(app)
      .post('/calc')
      .send({ first: 8, second: 2, operator: '/' })
    expect(response.status).toEqual(200)
    expect(response.body.ok).toBeTruthy()
    expect(response.body.result).toEqual(4)
  })

  it('given 8 ^ 0, should return 1', async () => {
    const response = await request(app)
      .post('/calc')
      .send({ first: 8, second: 0, operator: '^' })
    expect(response.status).toEqual(200)
    expect(response.body.ok).toBeTruthy()
    expect(response.body.result).toEqual(1)
  })

  it('given 8 ^ 2, should return 64', async () => {
    const response = await request(app)
      .post('/calc')
      .send({ first: 8, second: 2, operator: '^' })
    expect(response.status).toEqual(200)
    expect(response.body.ok).toBeTruthy()
    expect(response.body.result).toEqual(64)
  })

  it('given invalid operator, should return 400', async () => {
    const response = await request(app)
      .post('/calc')
      .send({ first: 8, second: 2, operator: 'a' })
    expect(response.status).toEqual(400)
    expect(response.body.ok).toBeFalsy()
  })
})
