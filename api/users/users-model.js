const db = require('../../data/db-config')

const find = () => {
  return db('users')
}

module.exports = {
  find
}