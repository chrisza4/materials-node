const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const user = 'chris'
const systemPassword = '$2b$10$T.V9Xfxj7t/wqKObniXWCu1LrBWOdlHkfvV9MJFobtfKF6ZsibsV.' // hello
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2hyaXMifQ.Pi7EhhuYPPIeq9O2YwYclMsU3-YMguNeQg4uW-qpJhU'

app.use(bodyParser.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === user && bcrypt.compareSync(password, systemPassword)) {
    res.send({ ok: true, token })
  } else {
    res.send({ ok: false })
  }
})

app.post('/secret', (req, res) => {
  if (req.headers.authorization !== token) {
    return res.status(403).send({ error: 'unauthorized' })
  }
  return res.json({ ok: true, result: 'Secret data is $!@#!#$#@%$#!aaa' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
