const express = require('express')
const server = express()
const usersRouter = require('./users/users-router')

server.use(express.json())

server.use('/api/users', usersRouter)

//eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server