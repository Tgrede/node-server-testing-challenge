const express = require('express')
const router = express.Router()
const Users = require('./users-model')

router.get('/', async (req, res, next) => {
  const allUsers = await Users.find()
  res.json(allUsers)
})

module.exports = router