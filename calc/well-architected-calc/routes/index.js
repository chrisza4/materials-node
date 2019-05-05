const express = require('express')
const router = express.Router()

const CalcController = require('../controllers/calcController')

router.post('/calc', function(req, res, next) {
  res.send(CalcController.PostCalc(req, res))
})

module.exports = router
